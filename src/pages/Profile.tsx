import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, LogOut, PlayCircle, MapPin, ShoppingBag, Calendar, Mail, Phone } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const courseInfo: Record<string, { name: string; nameEn: string; icon: typeof PlayCircle; link: string; linkLabel: string }> = {
  recorded: { name: "রেকর্ডেড ভিডিও কোর্স", nameEn: "Recorded Video Course", icon: PlayCircle, link: "/videos", linkLabel: "ভিডিও দেখুন" },
  physical: { name: "ফিজিক্যাল কোর্স", nameEn: "Physical Course", icon: MapPin, link: "/details", linkLabel: "বিস্তারিত দেখুন" },
};

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-dark">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-24 h-24 rounded-full bg-pink/20 border-2 border-gold flex items-center justify-center">
                <User className="w-10 h-10 text-gold" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-display text-3xl text-primary-foreground">{user.name}</h1>
                <p className="text-primary-foreground/60 font-body text-sm mt-1">Student at Nigar Fashion World</p>
              </div>
              <button
                onClick={() => { logout(); navigate("/"); }}
                className="md:ml-auto flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground/70 font-body text-xs uppercase tracking-wider rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </motion.div>
          </div>
        </section>

        {/* Profile info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, label: "ইমেইল", value: user.email },
                { icon: Phone, label: "মোবাইল", value: user.phone || "N/A" },
                { icon: Calendar, label: "যোগদান", value: new Date(user.joinDate).toLocaleDateString("bn-BD") },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blush rounded-2xl p-5 border border-pink-light flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-pink" />
                  </div>
                  <div>
                    <p className="text-muted-foreground font-body text-xs">{item.label}</p>
                    <p className="text-foreground font-body text-sm font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Purchased courses */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="w-5 h-5 text-pink" />
                <h2 className="font-display text-2xl text-foreground">কেনা কোর্সসমূহ</h2>
                <span className="text-muted-foreground font-body text-sm">Purchased Courses</span>
              </div>

              {user.purchasedCourses.length === 0 ? (
                <div className="bg-blush rounded-2xl p-8 border border-pink-light text-center">
                  <ShoppingBag className="w-12 h-12 text-pink/30 mx-auto mb-4" />
                  <p className="text-foreground font-display text-lg mb-1">কোনো কোর্স কেনা হয়নি</p>
                  <p className="text-muted-foreground font-body text-sm mb-4">No courses purchased yet</p>
                  <Link
                    to="/#pricing"
                    className="inline-flex px-6 py-3 bg-pink text-primary-foreground font-body font-semibold text-sm rounded-full hover:bg-hot-pink transition-colors"
                  >
                    কোর্স দেখুন — Browse Courses
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {user.purchasedCourses.map((id) => {
                    const c = courseInfo[id];
                    if (!c) return null;
                    return (
                      <div key={id} className="bg-card rounded-2xl p-6 border border-pink-light shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center">
                            <c.icon className="w-5 h-5 text-pink" />
                          </div>
                          <div>
                            <h3 className="font-display text-base text-foreground">{c.name}</h3>
                            <p className="text-muted-foreground font-body text-xs">{c.nameEn}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xs font-body text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">✓ Active</span>
                          <Link
                            to={c.link}
                            className="text-pink font-body text-sm font-medium hover:underline"
                          >
                            {c.linkLabel} →
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
};

export default Profile;
