"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, BookmarkPlus, Zap, Flame, Compass, Check } from "lucide-react";
import { resourcesData, categories } from "@/data/resources";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState<"All" | "Trending" | "New Releases">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedItems, setSavedItems] = useState<number[]>([]);

  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      let matchesCategory = true;
      if (activeFilter === "All") {
        matchesCategory = activeCategory === "All" || item.category === activeCategory;
      } else if (activeFilter === "Trending") {
        matchesCategory = !!item.trending;
      } else if (activeFilter === "New Releases") {
        matchesCategory = !!item.newRelease;
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, activeFilter, searchQuery]);

  const toggleSave = (id: number) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              CZ
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">CodingZero</span>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search resources, tags, or tools... (Press '/')"
                className="w-full bg-secondary/50 border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none hidden sm:flex">
                <kbd className="inline-flex items-center rounded border border-border px-1 font-mono text-[10px] font-medium text-muted-foreground">
                  /
                </kbd>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <BookmarkPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Saved ({savedItems.length})</span>
            </button>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Submit</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row py-8 gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Discover</h3>
              <div className="space-y-1">
                <button 
                  onClick={() => { setActiveFilter("All"); setActiveCategory("All"); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors ${activeFilter === "All" && activeCategory === "All" ? 'bg-secondary/80 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>
                  <Compass className={`h-4 w-4 ${activeFilter === "All" && activeCategory === "All" ? 'text-primary' : 'text-muted-foreground'}`} />
                  All Resources
                </button>
                <button 
                  onClick={() => { setActiveFilter("Trending"); setActiveCategory("All"); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors ${activeFilter === "Trending" ? 'bg-secondary/80 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>
                  <Flame className={`h-4 w-4 ${activeFilter === "Trending" ? 'text-orange-500' : 'text-muted-foreground'}`} />
                  Trending
                </button>
                <button 
                  onClick={() => { setActiveFilter("New Releases"); setActiveCategory("All"); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors ${activeFilter === "New Releases" ? 'bg-secondary/80 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>
                  <Zap className={`h-4 w-4 ${activeFilter === "New Releases" ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                  New Releases
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Categories</h3>
              <div className="space-y-1 max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveFilter("All"); setActiveCategory(cat); }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeCategory === cat && activeFilter === "All"
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {activeFilter !== "All" ? activeFilter : (activeCategory === "All" ? "Explore Resources" : activeCategory)}
              </h1>
              <p className="text-muted-foreground">
                Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence>
                {filteredResources.map((resource) => {
                  const isSaved = savedItems.includes(resource.id);
                  return (
                    <motion.div
                      key={resource.id}
                      layout
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative flex flex-col justify-between rounded-xl border border-border/50 bg-secondary/20 p-5 overflow-hidden transition-colors hover:border-primary/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="inline-flex items-center rounded-full border border-border/50 bg-background px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                            {resource.category}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSave(resource.id);
                            }}
                            className={`p-1.5 rounded-md transition-colors ${
                              isSaved ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                            }`}
                            aria-label="Save resource"
                          >
                            {isSaved ? <Check className="h-4 w-4" /> : <BookmarkPlus className="h-4 w-4" />}
                          </button>
                        </div>
                        
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block focus:outline-none mt-2">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-md bg-background/50 flex items-center justify-center overflow-hidden border border-border/50 shrink-0 shadow-sm">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img 
                                src={`https://www.google.com/s2/favicons?domain=${resource.url}&sz=128`} 
                                alt={`${resource.title} icon`}
                                className="w-5 h-5 object-contain"
                                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                              />
                            </div>
                            <h3 className="font-semibold text-lg text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                              {resource.title}
                              <ExternalLink className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {resource.desc}
                          </p>
                        </a>
                      </div>
                      
                      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                        {resource.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-background border border-border/50 px-2 py-1 text-[10px] font-medium text-muted-foreground transition-colors group-hover:border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-20 text-center border border-dashed border-border rounded-xl bg-secondary/10 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                We couldn&apos;t find anything matching your search for &quot;{searchQuery}&quot;. Try adjusting your filters.
              </p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-12 bg-secondary/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> for developers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Submit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
