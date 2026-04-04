import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { LayoutDashboard, Users, Landmark, FileText, ClipboardList, Settings } from "lucide-react";

type Tab =
  | "overview" | "giving" | "members"
  | "general-overview" | "profile"
  | "reports" | "families"
  | "events" | "schedules"
  | "ministry-budgets"
  | "settings" | "audit-log";

interface BarData {
  label: string;
  pct: number;
  amount: string;
}

interface TabData {
  title: string;
  subtitle: string;
  sidebarSection: string;
  sidebarItem: string;
  kpi1: { label: string; value: string; trend: string };
  kpi2: { label: string; value: string; trend: string };
  kpi3: { label: string; value: string; trend: string };
  bars: BarData[];
  barSectionLabel: string;
  chips: string[];
}

const tabData: Record<Tab, TabData> = {
  "general-overview": {
    title: "Church Overview",
    subtitle: "A snapshot of your church's overall health and activity.",
    sidebarSection: "GENERAL",
    sidebarItem: "Overview",
    kpi1: { label: "Total Members", value: "342", trend: "↑ 8 new this week" },
    kpi2: { label: "Total Giving", value: "₱184,500", trend: "↑ 12% this month" },
    kpi3: { label: "Active Ministries", value: "5", trend: "All budgets active" },
    bars: [
      { label: "Community", pct: 82, amount: "82%" },
      { label: "Stewardship", pct: 74, amount: "74%" },
      { label: "Planning", pct: 61, amount: "61%" },
    ],
    barSectionLabel: "Module Engagement",
    chips: ["All systems active", "₱184.5K raised", "5 Ministries"],
  },
  profile: {
    title: "My Profile",
    subtitle: "Your personal giving, attendance, and ministry involvement.",
    sidebarSection: "GENERAL",
    sidebarItem: "My Profile",
    kpi1: { label: "My Giving (YTD)", value: "₱12,400", trend: "↑ On track" },
    kpi2: { label: "Attendance Rate", value: "92%", trend: "↑ Above average" },
    kpi3: { label: "My Ministries", value: "2", trend: "Active member" },
    bars: [
      { label: "January", pct: 72, amount: "₱3,800" },
      { label: "February", pct: 80, amount: "₱4,200" },
      { label: "March", pct: 84, amount: "₱4,400" },
    ],
    barSectionLabel: "My Giving Trend",
    chips: ["Worship Team", "Youth Ministry", "Member since 2021"],
  },
  reports: {
    title: "Community Reports",
    subtitle: "Generated reports on membership, attendance, and giving.",
    sidebarSection: "COMMUNITY",
    sidebarItem: "Reports",
    kpi1: { label: "Total Reports", value: "14", trend: "3 new this month" },
    kpi2: { label: "This Quarter", value: "5", trend: "Q1 2025" },
    kpi3: { label: "Members Covered", value: "342", trend: "100% coverage" },
    bars: [
      { label: "Giving", pct: 90, amount: "90%" },
      { label: "Membership", pct: 85, amount: "85%" },
      { label: "Attendance", pct: 72, amount: "72%" },
    ],
    barSectionLabel: "Report Completeness",
    chips: ["Q1 2025", "14 Reports", "3 Categories"],
  },
  families: {
    title: "Families",
    subtitle: "Manage and track household records in your congregation.",
    sidebarSection: "COMMUNITY",
    sidebarItem: "Families",
    kpi1: { label: "Total Families", value: "28", trend: "↑ 2 new this month" },
    kpi2: { label: "Avg Family Size", value: "3.2", trend: "Stable" },
    kpi3: { label: "New This Month", value: "2", trend: "↑ Growing" },
    bars: [
      { label: "Active", pct: 75, amount: "21" },
      { label: "Incomplete", pct: 18, amount: "5" },
      { label: "Inactive", pct: 7, amount: "2" },
    ],
    barSectionLabel: "Family Status",
    chips: ["28 Families", "89 Members", "2 New"],
  },
  events: {
    title: "Events",
    subtitle: "Plan and track all church events and their attendance.",
    sidebarSection: "PLANNING",
    sidebarItem: "Events",
    kpi1: { label: "Upcoming Events", value: "3", trend: "Next: Sunday Service" },
    kpi2: { label: "This Month", value: "8", trend: "↑ 2 more than last" },
    kpi3: { label: "Last Attendance", value: "245", trend: "↑ 94% capacity" },
    bars: [
      { label: "Worship", pct: 92, amount: "92%" },
      { label: "Youth", pct: 78, amount: "78%" },
      { label: "Outreach", pct: 65, amount: "65%" },
    ],
    barSectionLabel: "Event Attendance Rate",
    chips: ["3 Upcoming", "245 Avg Attendance", "8 This Month"],
  },
  schedules: {
    title: "Schedules",
    subtitle: "Coordinate volunteer schedules across all services and teams.",
    sidebarSection: "PLANNING",
    sidebarItem: "Schedules",
    kpi1: { label: "This Week", value: "4", trend: "2 pending confirmation" },
    kpi2: { label: "Volunteers Needed", value: "12", trend: "3 slots open" },
    kpi3: { label: "Confirmed", value: "89%", trend: "↑ Strong turnout" },
    bars: [
      { label: "Sunday", pct: 100, amount: "100%" },
      { label: "Wednesday", pct: 83, amount: "83%" },
      { label: "Friday", pct: 67, amount: "67%" },
    ],
    barSectionLabel: "Schedule Fill Rate",
    chips: ["4 This Week", "12 Volunteers", "89% Confirmed"],
  },
  "ministry-budgets": {
    title: "Ministry Budgets",
    subtitle: "Review and manage budget allocations for each ministry.",
    sidebarSection: "STEWARDSHIP",
    sidebarItem: "Ministry Budgets",
    kpi1: { label: "Total Budget", value: "₱85,000", trend: "FY 2025 allocation" },
    kpi2: { label: "Utilized", value: "₱52,300", trend: "↑ 62% used" },
    kpi3: { label: "Remaining", value: "₱32,700", trend: "On track" },
    bars: [
      { label: "Worship", pct: 88, amount: "₱29,700" },
      { label: "Youth", pct: 62, amount: "₱14,880" },
      { label: "Outreach", pct: 47, amount: "₱7,520" },
    ],
    barSectionLabel: "Budget Utilization",
    chips: ["₱85K Total", "₱32.7K Remaining", "5 Ministries"],
  },
  settings: {
    title: "Settings",
    subtitle: "Manage users, roles, and system configuration.",
    sidebarSection: "ADMINISTRATION",
    sidebarItem: "Settings",
    kpi1: { label: "Active Users", value: "6", trend: "All roles assigned" },
    kpi2: { label: "Roles Defined", value: "4", trend: "RBAC enabled" },
    kpi3: { label: "Last Updated", value: "Today", trend: "✓ Up to date" },
    bars: [
      { label: "Admin", pct: 33, amount: "2 users" },
      { label: "Leader", pct: 33, amount: "2 users" },
      { label: "Member", pct: 34, amount: "2 users" },
    ],
    barSectionLabel: "User Roles",
    chips: ["6 Active Users", "4 Roles", "Secure"],
  },
  "audit-log": {
    title: "Audit Log",
    subtitle: "Review all system activity, changes, and access events.",
    sidebarSection: "ADMINISTRATION",
    sidebarItem: "Audit Log",
    kpi1: { label: "Log Entries", value: "128", trend: "Last 30 days" },
    kpi2: { label: "This Week", value: "14", trend: "Normal activity" },
    kpi3: { label: "Critical Alerts", value: "0", trend: "✓ All clear" },
    bars: [
      { label: "Logins", pct: 55, amount: "70" },
      { label: "Edits", pct: 30, amount: "38" },
      { label: "Exports", pct: 15, amount: "20" },
    ],
    barSectionLabel: "Activity by Type",
    chips: ["128 Entries", "0 Alerts", "Last 30 Days"],
  },
  overview: {
    title: "Treasury Overview",
    subtitle: "Manage your church's financial health at a glance.",
    sidebarSection: "STEWARDSHIP",
    sidebarItem: "Treasury Overview",
    kpi1: { label: "Total Giving", value: "₱184,500", trend: "↑ 12% this month" },
    kpi2: { label: "Active Members", value: "342", trend: "↑ 8 new this week" },
    kpi3: { label: "Ministries", value: "5", trend: "All budgets active" },
    bars: [
      { label: "Worship", pct: 78, amount: "₱23,400" },
      { label: "Youth", pct: 55, amount: "₱16,500" },
      { label: "Outreach", pct: 40, amount: "₱12,000" },
    ],
    barSectionLabel: "Ministry Budgets",
    chips: ["342 Members", "28 Families", "5 Ministries"],
  },
  giving: {
    title: "Financial Records",
    subtitle: "Track income, expenses, and monthly giving trends.",
    sidebarSection: "STEWARDSHIP",
    sidebarItem: "Financial Records",
    kpi1: { label: "This Month", value: "₱48,200", trend: "↑ 13% vs last month" },
    kpi2: { label: "Avg per Member", value: "₱1,410", trend: "↑ Trending up" },
    kpi3: { label: "Expenses", value: "₱31,800", trend: "Within budget" },
    bars: [
      { label: "January", pct: 69, amount: "₱38,000" },
      { label: "February", pct: 76, amount: "₱42,000" },
      { label: "March", pct: 88, amount: "₱48,200" },
    ],
    barSectionLabel: "Monthly Giving Trend",
    chips: ["Q1 Total: ₱128.2K", "Goal: ₱55K/mo", "3 Months Tracked"],
  },
  members: {
    title: "Dashboard",
    subtitle: "Monitor your congregation's growth and engagement.",
    sidebarSection: "COMMUNITY",
    sidebarItem: "Dashboard",
    kpi1: { label: "Total Members", value: "342", trend: "↑ Growing steadily" },
    kpi2: { label: "Attendance Rate", value: "78%", trend: "↑ 3% this month" },
    kpi3: { label: "New This Month", value: "8", trend: "↑ Consistent growth" },
    bars: [
      { label: "Regular", pct: 64, amount: "218" },
      { label: "New", pct: 13, amount: "45" },
      { label: "Inactive", pct: 23, amount: "79" },
    ],
    barSectionLabel: "Membership Status",
    chips: ["5 Ministries", "28 Families", "45 New Members"],
  },
};

type SidebarItem = { label: string; icon: React.ComponentType<{ size?: number; className?: string }> };
const sidebarNav: { section: string; items: SidebarItem[] }[] = [
  { section: "COMMUNITY",   items: [{ label: "Dashboard", icon: LayoutDashboard }, { label: "Families", icon: Users }] },
  { section: "STEWARDSHIP", items: [{ label: "Treasury Overview", icon: Landmark }, { label: "Financial Records", icon: FileText }, { label: "Ministry Budgets", icon: ClipboardList }] },
  { section: "SETTINGS",    items: [{ label: "Settings", icon: Settings }] },
];

// Sidebar item → tab mapping
const itemToTab: Partial<Record<string, Tab>> = {
  "Overview":          "general-overview",
  "My Profile":        "profile",
  "Reports":           "reports",
  "Families":          "families",
  "Events":            "events",
  "Schedules":         "schedules",
  "Treasury Overview": "overview",
  "Financial Records": "giving",
  "Ministry Budgets":  "ministry-budgets",
  "Settings":          "settings",
  "Audit Log":         "audit-log",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FinancialAreaChart({ chartKey }: { chartKey: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const months   = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const giving   = [38000, 42000, 48200, 44500, 51000, 55200];
  const expenses = [28000, 30500, 31800, 29000, 33200, 35000];

  const W = 280, H = 68, padL = 18, padR = 8, availW = W - padL - padR;
  const maxVal = 60000, minVal = 24000;
  const toY = (v: number) => H - ((v - minVal) / (maxVal - minVal)) * (H - 10) - 5;

  const gPts = giving.map((v, i)   => ({ x: padL + (i / (giving.length - 1)) * availW, y: toY(v), value: v }));
  const ePts = expenses.map((v, i) => ({ x: padL + (i / (expenses.length - 1)) * availW, y: toY(v), value: v }));

  const makeCurve = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => {
      if (i === 0) return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      const prev = pts[i - 1];
      const cpX = ((prev.x + p.x) / 2).toFixed(1);
      return `C ${cpX} ${prev.y.toFixed(1)} ${cpX} ${p.y.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }).join(" ");

  const gLine = makeCurve(gPts);
  const eLine = makeCurve(ePts);
  const gArea = `${gLine} L ${gPts[gPts.length - 1].x.toFixed(1)} ${H + 2} L ${gPts[0].x.toFixed(1)} ${H + 2} Z`;
  const eArea = `${eLine} L ${ePts[ePts.length - 1].x.toFixed(1)} ${H + 2} L ${ePts[0].x.toFixed(1)} ${H + 2} Z`;

  return (
    <motion.div
      key={chartKey}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-sm border border-[#eaf3e5]"
    >
      {/* Legend */}
      <div className="flex items-center justify-between">
        <p className="text-[#4a5a4a] text-[11px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
          6-Month Giving & Expense Trend
        </p>
        <div className="flex gap-3">
          {[{ color: "#1a6640", label: "Giving" }, { color: "#b8973a", label: "Expenses" }].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-3 h-[2px] rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[9px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SVG chart */}
      <svg width="100%" viewBox={`0 0 ${W} ${H + 16}`} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1a6640" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1a6640" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#b8973a" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#b8973a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y-axis grid + labels */}
        {[0, 0.5, 1].map((frac) => {
          const y   = 5 + frac * (H - 14);
          const val = maxVal - frac * (maxVal - minVal);
          return (
            <g key={frac}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#f0f7ec" strokeWidth="1" />
              <text x={padL - 3} y={y + 3} textAnchor="end" fill="#c5d9be" fontSize="7" fontFamily="DM Sans, sans-serif">
                {`${(val / 1000).toFixed(0)}K`}
              </text>
            </g>
          );
        })}

        {/* Expense area + line */}
        <motion.path d={eArea} fill="url(#expGrad)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }} />
        <motion.path d={eLine} fill="none" stroke="#b8973a" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />

        {/* Giving area + line */}
        <motion.path d={gArea} fill="url(#finGrad)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }} />
        <motion.path d={gLine} fill="none" stroke="#1a6640" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />

        {/* Interactive dots + tooltips */}
        {gPts.map((p, i) => {
          const tipX = Math.max(26, Math.min(W - 26, p.x));
          return (
            <g key={i} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} style={{ cursor: "default" }}>
              <circle cx={p.x} cy={p.y} r="12" fill="transparent" />
              <motion.circle cx={p.x} cy={p.y} r={2} fill="white" stroke="#1a6640" strokeWidth="1.5"
                animate={{ r: hoveredIdx === i ? 3.5 : 2 }} transition={{ duration: 0.1 }} />
              {hoveredIdx === i && (
                <g>
                  <rect x={tipX - 25} y={p.y - 23} width="50" height="15" rx="3" fill="#1a6640" />
                  <text x={tipX} y={p.y - 13} textAnchor="middle" fill="white" fontSize="7.5"
                    fontFamily="DM Sans, sans-serif" fontWeight="600">
                    {`₱${(p.value / 1000).toFixed(1)}K`}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Month labels */}
        {gPts.map((p, i) => (
          <text key={i} x={p.x} y={H + 14} textAnchor="middle" fill="#4a5a4a" fontSize="8" fontFamily="DM Sans, sans-serif">
            {months[i]}
          </text>
        ))}
      </svg>

      {/* Net surplus strip */}
      <div className="flex gap-1 pt-1 border-t border-[#f0f7ec]">
        {months.map((m, i) => (
          <div key={m} className="flex-1 text-center">
            <p className="text-[7px] text-[#c5d9be]" style={{ fontFamily: "DM Sans, sans-serif" }}>{m}</p>
            <p className="text-[8px] font-semibold text-[#1a6640]" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {`+₱${((giving[i] - expenses[i]) / 1000).toFixed(1)}K`}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Members: animated member-list table ──────────────────────────────────────
function MemberListContent() {
  const rows = [
    { initials: "MR", color: "#1a6640", name: "Maria Reyes",  role: "Elder",   att: 96, active: true  },
    { initials: "JT", color: "#2d7a55", name: "Jose Tamayo",  role: "Deacon",  att: 88, active: true  },
    { initials: "AL", color: "#b8973a", name: "Ana Lim",      role: "Leader",  att: 84, active: true  },
    { initials: "CS", color: "#3a8f6a", name: "Carla Santos", role: "Member",  att: 72, active: true  },
    { initials: "PT", color: "#8a8a8a", name: "Pedro Torres", role: "Member",  att: 55, active: false },
  ];
  return (
    <motion.div
      key="members-list"
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="bg-white rounded-xl p-4 flex flex-col shadow-sm border border-[#eaf3e5]"
    >
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[#4a5a4a] text-[11px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>Member Roster</p>
        <span className="text-[9px] text-[#1a6640] font-semibold bg-[#eaf3e5] px-2 py-0.5 rounded-full" style={{ fontFamily: "DM Sans, sans-serif" }}>342 total</span>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22, delay: 0.06 + i * 0.07 }}
          className="flex items-center gap-2.5 py-1.5 border-b border-[#f6fbf3] last:border-0"
        >
          <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white"
            style={{ backgroundColor: r.color, fontFamily: "Urbanist, sans-serif" }}>
            {r.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium text-[#181d18] truncate leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.name}</p>
            <p className="text-[8px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.role}</p>
          </div>
          <div className="w-14 flex flex-col gap-0.5">
            <div className="bg-[#eaf3e5] rounded-full h-[5px] w-full overflow-hidden">
              <motion.div className="h-full rounded-full bg-[#1a6640]"
                initial={{ width: 0 }} animate={{ width: `${r.att}%` }}
                transition={{ duration: 0.7, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
            </div>
            <p className="text-[7.5px] text-[#4a5a4a] text-right" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.att}%</p>
          </div>
          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.active ? "bg-[#28c840]" : "bg-[#d0d0d0]"}`} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Families: 3×2 card grid ───────────────────────────────────────────────────
function FamilyGridContent() {
  const families = [
    { name: "Reyes",   count: 4, kids: 2, status: "Active",   color: "#1a6640" },
    { name: "Tamayo",  count: 3, kids: 1, status: "Active",   color: "#2d7a55" },
    { name: "Lim",     count: 5, kids: 3, status: "Active",   color: "#3a8f6a" },
    { name: "Torres",  count: 2, kids: 0, status: "Inactive", color: "#8a8a8a" },
    { name: "Santos",  count: 6, kids: 4, status: "Active",   color: "#b8973a" },
    { name: "Cruz",    count: 3, kids: 1, status: "New",      color: "#5b6ef5" },
  ];
  const badge: Record<string, string> = {
    Active:   "bg-[#eaf3e5] text-[#1a6640]",
    Inactive: "bg-[#f5f5f5] text-[#8a8a8a]",
    New:      "bg-[#f5ecd0] text-[#b8973a]",
  };
  return (
    <motion.div
      key="families-grid"
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="flex flex-col gap-2"
    >
      <p className="text-[#4a5a4a] text-[11px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>Family Directory</p>
      <div className="grid grid-cols-3 gap-2">
        {families.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.04 + i * 0.05 }}
            whileHover={{ y: -2, boxShadow: "0 4px 14px rgba(0,53,29,0.1)" }}
            className="bg-white rounded-xl p-3 flex flex-col gap-1.5 border border-[#eaf3e5] shadow-sm cursor-default"
          >
            <div className="flex -space-x-1 mb-0.5">
              {Array.from({ length: Math.min(f.count, 4) }).map((_, j) => (
                <div key={j} className="w-4 h-4 rounded-full border-[1.5px] border-white flex items-center justify-center text-[5px] text-white font-bold"
                  style={{ backgroundColor: f.color, opacity: 1 - j * 0.18 }} />
              ))}
              {f.count > 4 && (
                <div className="w-4 h-4 rounded-full border-[1.5px] border-white bg-[#eaf3e5] flex items-center justify-center text-[6px] font-bold text-[#1a6640]">
                  +{f.count - 4}
                </div>
              )}
            </div>
            <p className="text-[10px] font-semibold text-[#181d18] leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>{f.name} Family</p>
            <p className="text-[8px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{f.count} members · {f.kids} kids</p>
            <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full w-fit ${badge[f.status]}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{f.status}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Treasury: donut chart + recent transactions ───────────────────────────────
function TreasuryDonutContent() {
  const slices = [
    { label: "Worship",  value: 29700, color: "#1a6640" },
    { label: "Youth",    value: 14900, color: "#3a8f6a" },
    { label: "Outreach", value:  7500, color: "#b8973a" },
    { label: "Children", value:  8200, color: "#5b9d7a" },
    { label: "Admin",    value:  6700, color: "#ddecd6" },
  ];
  const transactions = [
    { name: "Sunday Offering",         amount: "+₱12,400", date: "Mar 31", credit: true  },
    { name: "Worship Equipment",       amount: "−₱3,200",  date: "Mar 29", credit: false },
    { name: "Youth Camp Registration", amount: "+₱8,500",  date: "Mar 28", credit: true  },
    { name: "Building Maintenance",    amount: "−₱2,100",  date: "Mar 25", credit: false },
  ];
  const total = slices.reduce((s, x) => s + x.value, 0);
  const R = 26, strokeW = 9, C = 2 * Math.PI * R;
  let cum = 0;
  const segments = slices.map((s) => {
    const pct  = s.value / total;
    const dash = pct * C;
    const offset = C * (0.25 - cum);
    cum += pct;
    return { ...s, pct, dash, offset };
  });

  return (
    <motion.div
      key="treasury-donut"
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="flex gap-2.5"
    >
      {/* Donut */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-[#eaf3e5] flex flex-col gap-2 shrink-0 w-[126px]">
        <p className="text-[#4a5a4a] text-[10px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>Budget Split</p>
        <div className="flex justify-center">
          <svg width="64" height="64" viewBox="-32 -32 64 64">
            <circle cx="0" cy="0" r={R} fill="none" stroke="#f0f7ec" strokeWidth={strokeW} />
            {segments.map((s, i) => (
              <motion.circle key={s.label} cx="0" cy="0" r={R} fill="none"
                stroke={s.color} strokeWidth={strokeW}
                strokeDasharray={`${s.dash} ${C - s.dash}`}
                strokeDashoffset={s.offset}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.09 }} />
            ))}
            <text y="3.5" textAnchor="middle" fill="#00351d" fontSize="9" fontFamily="Urbanist, sans-serif" fontWeight="800">₱67K</text>
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          {segments.slice(0, 4).map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-[8px] text-[#4a5a4a] flex-1 truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>{s.label}</span>
              <span className="text-[8px] font-semibold text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>{Math.round(s.pct * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* Transactions */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-[#eaf3e5] flex flex-col gap-1.5 flex-1">
        <p className="text-[#4a5a4a] text-[10px] font-medium mb-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>Recent Transactions</p>
        {transactions.map((t, i) => (
          <motion.div key={t.name}
            initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.18 + i * 0.06 }}
            className="flex items-center gap-2 py-1.5 border-b border-[#f6fbf3] last:border-0"
          >
            <div className={`w-[3px] h-5 rounded-full shrink-0 ${t.credit ? "bg-[#1a6640]" : "bg-[#b8973a]"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-medium text-[#181d18] truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>{t.name}</p>
              <p className="text-[8px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{t.date}</p>
            </div>
            <span className={`text-[9px] font-bold shrink-0 ${t.credit ? "text-[#1a6640]" : "text-[#b8973a]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{t.amount}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Ministry Budgets: vertical grouped column chart ───────────────────────────
function MinistryColumnChart() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const ministries = [
    { label: "Worship",  budget: 34000, used: 29700 },
    { label: "Youth",    budget: 24000, used: 14900 },
    { label: "Outreach", budget: 16000, used:  7500 },
    { label: "Children", budget: 12000, used:  8200 },
    { label: "Admin",    budget:  9000, used:  6700 },
  ];
  const maxVal = 36000, barH = 76;
  return (
    <motion.div
      key="ministry-columns"
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="bg-white rounded-xl p-4 shadow-sm border border-[#eaf3e5] flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <p className="text-[#4a5a4a] text-[11px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>Budget vs Utilized</p>
        <div className="flex gap-3">
          {[{ color: "#ddecd6", label: "Allocated" }, { color: "#1a6640", label: "Utilized" }].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
              <span className="text-[9px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-between gap-1.5" style={{ height: barH + 24 }}>
        {ministries.map((m, i) => {
          const bH = (m.budget / maxVal) * barH;
          const uH = (m.used   / maxVal) * barH;
          const isHov = hoveredIdx === i;
          return (
            <div key={m.label} className="flex-1 flex flex-col items-center gap-1"
              onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
              <AnimatePresence>
                {isHov && (
                  <motion.p key="tip" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-[8px] font-bold text-[#1a6640] whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    ₱{(m.used / 1000).toFixed(1)}K
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="flex items-end gap-0.5 justify-center" style={{ height: barH }}>
                <div className="w-4 flex items-end rounded-t-sm overflow-hidden" style={{ height: barH }}>
                  <motion.div className="w-full rounded-t-sm" style={{ backgroundColor: isHov ? "#c5d9be" : "#ddecd6" }}
                    initial={{ height: 0 }} animate={{ height: bH }}
                    transition={{ duration: 0.65, delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
                </div>
                <div className="w-4 flex items-end rounded-t-sm overflow-hidden" style={{ height: barH }}>
                  <motion.div className="w-full rounded-t-sm" style={{ backgroundColor: isHov ? "#0d4225" : "#1a6640" }}
                    initial={{ height: 0 }} animate={{ height: uH }}
                    transition={{ duration: 0.65, delay: 0.13 + i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
                </div>
              </div>
              <p className="text-[7.5px] text-[#4a5a4a] text-center leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>{m.label}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── Settings: 2×2 role permission cards ──────────────────────────────────────
function SettingsRolesContent() {
  const roles = [
    { name: "Admin",          users: 2, desc: "Full system access",  color: "#1a6640", perms: ["Manage users", "All data", "Export"] },
    { name: "Treasurer",      users: 2, desc: "Financial oversight", color: "#b8973a", perms: ["View finances", "Record giving", "Reports"] },
    { name: "Ministry Leader",users: 4, desc: "Ministry mgmt",       color: "#3a8f6a", perms: ["View members", "Attendance", "Events"] },
    { name: "Member",         users: 8, desc: "Basic access",        color: "#5b9d7a", perms: ["My profile", "My giving", "Directory"] },
  ];
  return (
    <motion.div
      key="settings-roles"
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, delay: 0.05 }}
      className="flex flex-col gap-2"
    >
      <p className="text-[#4a5a4a] text-[11px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>Role Permissions</p>
      <div className="grid grid-cols-2 gap-2">
        {roles.map((role, i) => (
          <motion.div key={role.name}
            initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.05 + i * 0.05 }}
            whileHover={{ y: -1, boxShadow: "0 4px 14px rgba(0,53,29,0.08)" }}
            className="bg-white rounded-xl p-3 border border-[#eaf3e5] shadow-sm cursor-default"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: role.color }} />
                <span className="text-[10px] font-bold text-[#181d18]" style={{ fontFamily: "Urbanist, sans-serif" }}>{role.name}</span>
              </div>
              <span className="text-[8px] bg-[#f6fbf3] border border-[#eaf3e5] text-[#4a5a4a] px-1.5 py-0.5 rounded-full" style={{ fontFamily: "DM Sans, sans-serif" }}>{role.users} users</span>
            </div>
            <p className="text-[8px] text-[#4a5a4a] mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>{role.desc}</p>
            <div className="flex flex-col gap-0.5">
              {role.perms.map((p) => (
                <div key={p} className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: role.color }} />
                  <span className="text-[7.5px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function KPICard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.15 }}
      className="bg-white flex-1 rounded-xl px-4 py-3.5 flex flex-col gap-1 cursor-default shadow-sm border border-[#eaf3e5]"
    >
      <p className="text-[#4a5a4a] text-[10px] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
        {label}
      </p>
      <p className="text-[#00351d] font-extrabold text-[20px]" style={{ fontFamily: "Urbanist, sans-serif" }}>
        {value}
      </p>
      <p className="text-[#b8973a] text-[10px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>
        {trend}
      </p>
    </motion.div>
  );
}

function BarRow({
  label, pct, amount, isHovered, onHover, onLeave, delay,
}: {
  label: string; pct: number; amount: string;
  isHovered: boolean; onHover: () => void; onLeave: () => void; delay: number;
}) {
  return (
    <div className="flex gap-2.5 items-center relative group" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <p
        className={`text-[11px] w-[60px] shrink-0 transition-all duration-200 ${
          isHovered ? "text-[#1a6640] font-bold" : "text-[#181d18] font-normal"
        }`}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {label}
      </p>
      <div className="bg-[#ddecd6] rounded-full h-[6px] flex-1 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full transition-colors duration-200 ${isHovered ? "bg-[#0d4225]" : "bg-[#1a6640]"}`}
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
        )}
      </div>
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.p
            key="hovered"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="text-[11px] text-[#1a6640] font-bold whitespace-nowrap min-w-[52px] text-right"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {amount}
          </motion.p>
        ) : (
          <motion.p
            key="normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-[#4a5a4a] text-[11px] whitespace-nowrap min-w-[52px] text-right"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {amount}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function AppSidebar({
  activeSection,
  activeItem,
  onTabClick,
}: {
  activeSection: string;
  activeItem: string;
  onTabClick: (tab: Tab) => void;
}) {
  return (
    <div
      className="w-[160px] shrink-0 bg-[#00351d] flex flex-col py-4 overflow-hidden rounded-l-2xl"
    >
      {/* Logo */}
      <div className="px-4 mb-5">
        <span className="text-white font-extrabold text-[13px]" style={{ fontFamily: "Urbanist, sans-serif" }}>
          StewardTrack
        </span>
        <p className="text-[rgba(255,255,255,0.45)] text-[8px] mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
          Church Management
        </p>
      </div>

      {/* Nav */}
      <div className="flex flex-col gap-3 px-2 overflow-y-auto flex-1">
        {sidebarNav.map((group) => (
          <div key={group.section}>
            <p
              className="text-[rgba(255,255,255,0.45)] text-[8px] font-bold uppercase tracking-[0.08em] px-2 mb-1"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {group.section}
            </p>
            {group.items.map(({ label, icon: Icon }) => {
              // "Dashboard" is active only when sidebarSection is COMMUNITY
              const isActuallyActive =
                label === activeItem &&
                (label !== "Dashboard" || activeSection === "COMMUNITY");
              const tab = itemToTab[label];
              // Special-case: COMMUNITY > Dashboard maps to "members"
              const resolvedTab: Tab | undefined =
                label === "Dashboard" && group.section === "COMMUNITY"
                  ? "members"
                  : tab;
              return (
                <button
                  key={group.section + label}
                  onClick={() => resolvedTab && onTabClick(resolvedTab)}
                  aria-current={isActuallyActive ? "page" : undefined}
                  className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActuallyActive
                      ? "bg-[rgba(255,255,255,0.12)] text-white font-bold"
                      : "text-[rgba(255,255,255,0.65)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white"
                  } ${resolvedTab ? "cursor-pointer" : "cursor-default"}`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  <Icon size={10} className="shrink-0" />
                  {label}
                  {isActuallyActive && (
                    <div className="w-1.5 h-1.5 bg-[#28c840] rounded-full shrink-0 ml-auto" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function AppHeader({ pageTitle, activeSection }: { pageTitle: string; activeSection: string }) {
  const sectionLabel = activeSection.charAt(0) + activeSection.slice(1).toLowerCase();
  return (
    <div className="bg-white border-b border-[#eaf3e5] px-4 py-2.5 flex items-center justify-between shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5">
        <span className="text-[#4a5a4a] text-[10px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
          {sectionLabel}
        </span>
        <span className="text-[#c5d9be] text-[10px]">/</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={pageTitle}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 4 }}
            transition={{ duration: 0.2 }}
            className="text-[#1a6640] text-[10px] font-semibold"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {pageTitle}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="bg-[#f6fbf3] rounded-lg px-2.5 py-1 flex items-center gap-1.5 border border-[#ddecd6]">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="3.8" cy="3.8" r="2.3" stroke="#4a5a4a" strokeWidth="1.2" />
            <line x1="5.7" y1="5.7" x2="7.5" y2="7.5" stroke="#4a5a4a" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[#4a5a4a] text-[9px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Search StewardTrack
          </span>
        </div>
        {/* Bell */}
        <div className="w-6 h-6 bg-[#f6fbf3] rounded-full border border-[#ddecd6] flex items-center justify-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1.8C4.12 1.8 3 2.92 3 4.3v1.7l-.9.9v.5h6.8v-.5l-.9-.9V4.3C8 2.92 6.88 1.8 5.5 1.8z" stroke="#4a5a4a" strokeWidth="1" fill="none" />
            <path d="M4.75 8.9a.75.75 0 001.5 0" stroke="#4a5a4a" strokeWidth="1" fill="none" />
          </svg>
        </div>
        {/* Avatar */}
        <div className="w-6 h-6 bg-[#1a6640] rounded-full flex items-center justify-center shrink-0">
          <span className="text-white text-[7px] font-bold" style={{ fontFamily: "Urbanist, sans-serif" }}>
            TJ
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile components ────────────────────────────────────────────────────────

function MobileKPICard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="flex-1 bg-white rounded-2xl px-3 py-2.5 flex flex-col gap-0.5 border border-[#eaf3e5] shadow-sm">
      <p className="text-[8.5px] text-[#4a5a4a] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
      <p className="text-[15px] font-extrabold text-[#00351d]" style={{ fontFamily: "Urbanist, sans-serif" }}>{value}</p>
      <p className="text-[7.5px] font-semibold text-[#b8973a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{trend}</p>
    </div>
  );
}

function MobileTabContent({ activeTab }: { activeTab: Tab }) {
  const data = tabData[activeTab];

  if (activeTab === "members") {
    const rows = [
      { initials: "MR", color: "#1a6640", name: "Maria Reyes",  role: "Elder",  att: 96 },
      { initials: "JT", color: "#2d7a55", name: "Jose Tamayo",  role: "Deacon", att: 88 },
      { initials: "AL", color: "#b8973a", name: "Ana Lim",      role: "Leader", att: 84 },
      { initials: "CS", color: "#3a8f6a", name: "Carla Santos", role: "Member", att: 72 },
    ];
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
        <div className="bg-white rounded-2xl p-3 border border-[#eaf3e5] shadow-sm flex flex-col">
          <p className="text-[9px] font-medium text-[#4a5a4a] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>Member Roster</p>
          {rows.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="flex items-center gap-2 py-1.5 border-b border-[#f6fbf3] last:border-0">
              <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[7px] font-bold text-white"
                style={{ backgroundColor: r.color, fontFamily: "Urbanist, sans-serif" }}>{r.initials}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[9.5px] font-medium text-[#181d18] truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.name}</p>
                <p className="text-[7.5px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.role}</p>
              </div>
              <p className="text-[8.5px] font-bold text-[#1a6640]" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.att}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "families") {
    const fams = [
      { name: "Reyes Family",  count: 4, status: "Active",   color: "#1a6640" },
      { name: "Tamayo Family", count: 3, status: "Active",   color: "#2d7a55" },
      { name: "Lim Family",    count: 5, status: "Active",   color: "#3a8f6a" },
      { name: "Torres Family", count: 2, status: "Inactive", color: "#8a8a8a" },
    ];
    const badge: Record<string, string> = { Active: "text-[#1a6640] bg-[#eaf3e5]", Inactive: "text-[#8a8a8a] bg-[#f0f0f0]" };
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
        <div className="flex flex-col gap-2">
          {fams.map((f, i) => (
            <motion.div key={f.name}
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="bg-white rounded-2xl px-3 py-2.5 flex items-center gap-3 border border-[#eaf3e5] shadow-sm">
              <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-white text-[11px] font-extrabold"
                style={{ backgroundColor: f.color, fontFamily: "Urbanist, sans-serif" }}>{f.name[0]}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>{f.name}</p>
                <p className="text-[8px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{f.count} members</p>
              </div>
              <span className={`text-[7.5px] font-semibold px-2 py-0.5 rounded-full ${badge[f.status]}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{f.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "overview") {
    const txns = [
      { name: "Sunday Offering",   amount: "+₱12,400", credit: true  },
      { name: "Worship Equipment", amount: "−₱3,200",  credit: false },
      { name: "Youth Camp Reg.",   amount: "+₱8,500",  credit: true  },
    ];
    const slices = [{ v: 44, c: "#1a6640" }, { v: 22, c: "#3a8f6a" }, { v: 20, c: "#b8973a" }, { v: 14, c: "#ddecd6" }];
    const R = 18, sw = 6, C = 2 * Math.PI * R;
    let cum = 0;
    const segs = slices.map((s) => { const d = (s.v / 100) * C, o = C * (0.25 - cum); cum += s.v / 100; return { ...s, d, o }; });
    return (
      <div className="flex flex-col gap-3">
        <div className="bg-[#00351d] rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[rgba(255,255,255,0.55)] text-[8px]" style={{ fontFamily: "DM Sans, sans-serif" }}>Total Giving</p>
            <p className="text-white text-[22px] font-extrabold" style={{ fontFamily: "Urbanist, sans-serif" }}>₱184,500</p>
            <p className="text-[#6fde38] text-[8px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>↑ 12% this month</p>
          </div>
          <svg width="52" height="52" viewBox="-26 -26 52 52">
            <circle cx="0" cy="0" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={sw} />
            {segs.map((s, i) => (
              <motion.circle key={i} cx="0" cy="0" r={R} fill="none" stroke={s.c} strokeWidth={sw}
                strokeDasharray={`${s.d} ${C - s.d}`} strokeDashoffset={s.o}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.09, duration: 0.4 }} />
            ))}
          </svg>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-[#eaf3e5] shadow-sm flex flex-col">
          <p className="text-[9px] font-medium text-[#4a5a4a] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>Recent Transactions</p>
          {txns.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 + i * 0.06 }}
              className="flex items-center gap-2 py-1.5 border-b border-[#f6fbf3] last:border-0">
              <div className={`w-[3px] h-5 rounded-full shrink-0 ${t.credit ? "bg-[#1a6640]" : "bg-[#b8973a]"}`} />
              <p className="flex-1 text-[9px] font-medium text-[#181d18] truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>{t.name}</p>
              <span className={`text-[9px] font-bold ${t.credit ? "text-[#1a6640]" : "text-[#b8973a]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{t.amount}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "giving") {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const giving = [38000, 42000, 48200, 44500, 51000, 55200];
    const W = 220, H = 52, padL = 8, padR = 8, avail = W - padL - padR;
    const toY = (v: number) => H - ((v - 32000) / 28000) * (H - 8) - 4;
    const gPts = giving.map((v, i) => ({ x: padL + (i / 5) * avail, y: toY(v), v }));
    const line = gPts.map((p, i) => i === 0 ? `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}` : (() => { const pr = gPts[i-1]; const cx = ((pr.x+p.x)/2).toFixed(1); return `C ${cx} ${pr.y.toFixed(1)} ${cx} ${p.y.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`; })()).join(" ");
    const area = `${line} L ${gPts[5].x.toFixed(1)} ${H+2} L ${gPts[0].x.toFixed(1)} ${H+2} Z`;
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
        <div className="bg-white rounded-2xl p-3 border border-[#eaf3e5] shadow-sm">
          <p className="text-[9px] font-medium text-[#4a5a4a] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>6-Month Giving Trend</p>
          <svg width="100%" viewBox={`0 0 ${W} ${H + 16}`} style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="mFinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a6640" stopOpacity="0.2" /><stop offset="100%" stopColor="#1a6640" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path d={area} fill="url(#mFinGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
            <motion.path d={line} fill="none" stroke="#1a6640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} />
            {gPts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="white" stroke="#1a6640" strokeWidth="1.5" />)}
            {gPts.map((p, i) => <text key={i} x={p.x} y={H + 13} textAnchor="middle" fill="#4a5a4a" fontSize="8" fontFamily="DM Sans, sans-serif">{months[i]}</text>)}
          </svg>
        </div>
      </div>
    );
  }

  if (activeTab === "ministry-budgets") {
    const bars = [
      { label: "Worship",  pct: 88, amount: "₱29.7K", color: "#1a6640" },
      { label: "Youth",    pct: 62, amount: "₱14.9K", color: "#2d7a55" },
      { label: "Outreach", pct: 47, amount: "₱7.5K",  color: "#3a8f6a" },
      { label: "Children", pct: 68, amount: "₱8.2K",  color: "#b8973a" },
    ];
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
        <div className="bg-white rounded-2xl p-3 border border-[#eaf3e5] shadow-sm flex flex-col gap-2.5">
          <p className="text-[9px] font-medium text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>Budget Utilization</p>
          {bars.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.06 }}
              className="flex items-center gap-2">
              <p className="text-[8.5px] w-[46px] shrink-0 text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>{b.label}</p>
              <div className="flex-1 bg-[#eaf3e5] rounded-full h-[7px] overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ backgroundColor: b.color }}
                  initial={{ width: 0 }} animate={{ width: `${b.pct}%` }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
              </div>
              <p className="text-[8px] text-[#4a5a4a] w-[36px] text-right shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>{b.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "settings") {
    const roles = [
      { name: "Admin",     users: 2, color: "#1a6640", perms: "Full system access"    },
      { name: "Treasurer", users: 2, color: "#b8973a", perms: "Finances & reports"    },
      { name: "Leader",    users: 4, color: "#3a8f6a", perms: "Members & events"      },
      { name: "Member",    users: 8, color: "#5b9d7a", perms: "Profile & giving"      },
    ];
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
        <div className="flex flex-col gap-2">
          {roles.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="bg-white rounded-2xl px-3 py-2.5 flex items-center gap-3 border border-[#eaf3e5] shadow-sm">
              <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-white text-[10px] font-extrabold"
                style={{ backgroundColor: r.color, fontFamily: "Urbanist, sans-serif" }}>{r.name[0]}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.name}</p>
                <p className="text-[7.5px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.perms}</p>
              </div>
              <span className="text-[8px] bg-[#f6fbf3] border border-[#eaf3e5] text-[#4a5a4a] px-2 py-0.5 rounded-full shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>{r.users} users</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Generic fallback
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2"><MobileKPICard {...data.kpi1} /><MobileKPICard {...data.kpi2} /></div>
      <div className="bg-white rounded-2xl p-3 border border-[#eaf3e5] shadow-sm flex flex-col gap-2">
        {data.bars.map((bar, i) => (
          <div key={bar.label} className="flex items-center gap-2">
            <p className="text-[8.5px] w-[48px] shrink-0 text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>{bar.label}</p>
            <div className="flex-1 bg-[#eaf3e5] rounded-full h-[6px] overflow-hidden">
              <motion.div className="h-full rounded-full bg-[#1a6640]"
                initial={{ width: 0 }} animate={{ width: `${bar.pct}%` }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
            </div>
            <p className="text-[8px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{bar.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const mobileNavItems: { tab: Tab; label: string; icon: React.ReactNode }[] = [
  { tab: "members",          label: "Home",    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 10L10 3l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 8.5V16a1 1 0 001 1h3v-3.5h2V17h3a1 1 0 001-1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { tab: "overview",         label: "Treasury",icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v8M8 8c0-1.1.9-2 2-2s2 .9 2 2-2 1.5-2 1.5-2 .9-2 2 .9 2 2 2 2-.9 2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { tab: "giving",           label: "Records", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 13l3-3.5 2.5 2.5L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { tab: "ministry-budgets", label: "Budgets", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l-4.5-2.6M10 10v-5M10 10l4.5-2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { tab: "settings",         label: "Settings",icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.3 5.3l1.4 1.4M13.3 13.3l1.4 1.4M5.3 14.7l1.4-1.4M13.3 6.7l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
];

function MobileBottomNav({ activeTab, onTabClick }: { activeTab: Tab; onTabClick: (t: Tab) => void }) {
  return (
    <div className="bg-white border-t border-[#eaf3e5] px-1 py-1 flex items-center justify-around shrink-0">
      {mobileNavItems.map(({ tab, label, icon }) => {
        const active = activeTab === tab;
        return (
          <button key={tab} onClick={() => onTabClick(tab)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl relative"
            style={{ color: active ? "#1a6640" : "#8a9a8a" }}>
            {active && (
              <motion.div layoutId="mob-nav-pill"
                className="absolute inset-0 bg-[#eaf3e5] rounded-xl"
                transition={{ duration: 0.22, type: "spring", stiffness: 350, damping: 32 }} />
            )}
            <span className="relative z-10">{icon}</span>
            <span className={`relative z-10 text-[7px] ${active ? "font-bold" : "font-medium"}`}
              style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneMockup({ activeTab, onTabClick }: { activeTab: Tab; onTabClick: (t: Tab) => void }) {
  const data = tabData[activeTab];
  return (
    <div className="relative select-none" style={{ width: 270, margin: "0 auto" }}>
      {/* Phone body */}
      <div className="rounded-[44px] relative"
        style={{ background: "linear-gradient(160deg,#2e2e2e,#111)", padding: 10, boxShadow: "0 60px 130px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
        {/* Side buttons */}
        <div className="absolute rounded-l-full" style={{ left: -3, top: 92, width: 3, height: 26, background: "#383838" }} />
        <div className="absolute rounded-l-full" style={{ left: -3, top: 126, width: 3, height: 26, background: "#383838" }} />
        <div className="absolute rounded-r-full" style={{ right: -3, top: 110, width: 3, height: 40, background: "#383838" }} />
        {/* Screen */}
        <div className="rounded-[36px] overflow-hidden flex flex-col bg-[#f6fbf3]" style={{ height: 520 }}>
          {/* Status bar */}
          <div className="shrink-0 px-5 pt-3 pb-0 flex justify-between items-center">
            <span className="text-[9.5px] font-bold text-[#181d18]" style={{ fontFamily: "DM Sans, sans-serif" }}>9:41</span>
            <div className="flex gap-1.5 items-center">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <rect x="0" y="5" width="2" height="4" rx="0.4" fill="#181d18"/>
                <rect x="3" y="3" width="2" height="6" rx="0.4" fill="#181d18"/>
                <rect x="6" y="1" width="2" height="8" rx="0.4" fill="#181d18"/>
                <rect x="9" y="0" width="2" height="9" rx="0.4" fill="#181d18" opacity="0.3"/>
              </svg>
              <svg width="13" height="9" viewBox="0 0 14 10" fill="none">
                <circle cx="7" cy="9" r="1" fill="#181d18"/>
                <path d="M4.2 6.8c.7-.7 1.8-1.2 2.8-1.2s2.1.5 2.8 1.2" stroke="#181d18" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M1.5 4.2C3 2.8 4.9 2 7 2s4 .8 5.5 2.2" stroke="#181d18" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="#181d18" strokeWidth="1"/>
                <rect x="17" y="3" width="2.5" height="4" rx="1" fill="#181d18" opacity="0.4"/>
                <rect x="2" y="2" width="10" height="6" rx="1" fill="#181d18"/>
              </svg>
            </div>
          </div>
          {/* App header */}
          <div className="px-4 pt-1.5 pb-2 flex items-center justify-between shrink-0">
            <div>
              <p className="text-[13px] font-extrabold text-[#1a6640]" style={{ fontFamily: "Urbanist, sans-serif" }}>StewardTrack</p>
              <p className="text-[7.5px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {data.sidebarSection.charAt(0) + data.sidebarSection.slice(1).toLowerCase()} · {data.title}
              </p>
            </div>
            <div className="w-7 h-7 bg-[#1a6640] rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold" style={{ fontFamily: "Urbanist, sans-serif" }}>TJ</span>
            </div>
          </div>
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-3 pb-2" style={{ scrollbarWidth: "none" }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab + "-mob"}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}>
                <MobileTabContent activeTab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Bottom nav */}
          <MobileBottomNav activeTab={activeTab} onTabClick={onTabClick} />
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const data = tabData[activeTab];

  // Direct DOM mutation on mousemove — no React re-render, no stutter
  // Skip tilt when user prefers reduced motion
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) scale(1.01)`;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(ellipse at ${50 + x * 80}% ${50 + y * 80}%, rgba(26,102,64,0.07) 0%, transparent 65%)`;
    }
  }, [shouldReduceMotion]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (cardRef.current && !shouldReduceMotion) {
      cardRef.current.style.transition = "transform 0.08s linear";
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
    }
  }, [shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setHoveredBar(null);
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col items-center"
    >
      {/* Desktop / Mobile toggle */}
      <div className="flex bg-[#eaf3e5] rounded-full p-1 gap-0.5 mb-5">
        {(["desktop", "mobile"] as const).map((mode) => {
          const active = (mode === "desktop") !== isMobileView;
          return (
            <button key={mode} onClick={() => setIsMobileView(mode === "mobile")}
              className="relative px-4 py-1.5 rounded-full text-[12px] font-semibold transition-colors duration-150"
              style={{ color: active ? "#1a6640" : "#6a7a6a", fontFamily: "DM Sans, sans-serif" }}>
              {active && (
                <motion.div layoutId="view-mode-bg"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ duration: 0.22, type: "spring", stiffness: 350, damping: 32 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {mode === "desktop" ? (
                  <svg width="12" height="11" viewBox="0 0 16 13" fill="none">
                    <rect x="1" y="1" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5.5 12h5M8 10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="9" height="12" viewBox="0 0 10 15" fill="none">
                    <rect x="1" y="1" width="8" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="5" cy="11.5" r="0.8" fill="currentColor"/>
                  </svg>
                )}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </span>
            </button>
          );
        })}
      </div>

      {/* View switcher */}
      <AnimatePresence mode="wait">
        {isMobileView ? (
          <motion.div key="mobile-view"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -24 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}>
            <PhoneMockup
              activeTab={activeTab}
              onTabClick={(tab) => { setActiveTab(tab); setHoveredBar(null); }}
            />
          </motion.div>
        ) : (
          <motion.div key="desktop-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full" style={{ padding: "16px 8px" }}>
      {/* Inner wrapper: handles 3D tilt — transform managed via ref */}
      <div
        ref={cardRef}
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-[#f6fbf3] flex rounded-2xl shadow-[0px_32px_80px_0px_rgba(0,53,29,0.15)] relative overflow-hidden select-none w-full min-h-[440px]"
      >
        {/* Cursor-following glow — opacity managed via ref */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease",
            background: "radial-gradient(ellipse at 50% 50%, rgba(26,102,64,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Sidebar */}
        <AppSidebar
          activeSection={data.sidebarSection}
          activeItem={data.sidebarItem}
          onTabClick={(tab) => {
            setActiveTab(tab);
            setHoveredBar(null);
          }}
        />

        {/* Main area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <AppHeader pageTitle={data.title} activeSection={data.sidebarSection} />

          {/* Content body */}
          <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">

            {/* Page title + subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-heading"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="text-[#1a6640] font-extrabold text-[18px] leading-tight"
                  style={{ fontFamily: "Urbanist, sans-serif" }}
                >
                  {data.title}
                </p>
                <p
                  className="text-[#4a5a4a] text-[11px] mt-0.5"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {data.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* KPI row — 3 cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-kpis"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="flex gap-3"
              >
                <KPICard label={data.kpi1.label} value={data.kpi1.value} trend={data.kpi1.trend} />
                <KPICard label={data.kpi2.label} value={data.kpi2.value} trend={data.kpi2.trend} />
                <KPICard label={data.kpi3.label} value={data.kpi3.value} trend={data.kpi3.trend} />
              </motion.div>
            </AnimatePresence>

            {/* Per-tab custom content */}
            <AnimatePresence mode="wait">
              {activeTab === "giving"           ? <FinancialAreaChart   key="financial-chart"    chartKey={activeTab} /> :
               activeTab === "members"          ? <MemberListContent    key="members-list" /> :
               activeTab === "families"         ? <FamilyGridContent    key="families-grid" /> :
               activeTab === "overview"         ? <TreasuryDonutContent key="treasury-donut" /> :
               activeTab === "ministry-budgets" ? <MinistryColumnChart  key="ministry-columns" /> :
               activeTab === "settings"         ? <SettingsRolesContent key="settings-roles" /> :
               (
                <motion.div
                  key={activeTab + "-bars"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, delay: 0.05 }}
                  className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-sm border border-[#eaf3e5]"
                >
                  <p className="text-[#4a5a4a] text-[11px] font-medium mb-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {data.barSectionLabel}
                  </p>
                  {data.bars.map((bar, i) => (
                    <BarRow key={bar.label} {...bar}
                      isHovered={hoveredBar === bar.label}
                      onHover={() => setHoveredBar(bar.label)}
                      onLeave={() => setHoveredBar(null)}
                      delay={i * 0.07} />
                  ))}
                </motion.div>
               )
              }
            </AnimatePresence>

          </div>
        </div>

        {/* Live indicator — shows on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 4 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3.5 right-4 flex items-center gap-1.5 z-20"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[#28c840] rounded-full"
              />
              <span className="text-[10px] text-[#4a5a4a]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Live data
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
