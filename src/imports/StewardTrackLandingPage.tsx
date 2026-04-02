import imgLogoFull from "../assets/a65d01e22650a649bffd6b81718207659fb69d94.png";
import imgRectangle5 from "../assets/0c7863a730a70d564f7f174eadec97b8e83a5295.png";
import heroVideo2 from "../assets/hero-video-5.mp4";
import imgBanner from "../assets/05796020c94b6ec4f0869d691e82f08a72ca68e2.png";
import imgBanner1 from "../assets/3d6d9461d8c2e4f6d161413dd436f9d4c6bfb491.png";
import imgBanner2 from "../assets/6d9bc74846af2bfb75e46af2d6c0f5063f54395f.png";
import imgBanner3 from "../assets/3868d4a7cac88c8d3b4c7322c0485c18c7b09085.png";
import imgLogoFull1 from "../assets/195d19c3912b64142c49b51f4624398d7b2c2be9.png";

function LogoFull() {
  return (
    <div className="h-[30px] relative shrink-0 w-[156px]" data-name="LogoFull">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFull} />
    </div>
  );
}

function Text() {
  return <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px" data-name="Text" />;
}

function LogoFull1() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[97px]" data-name="LogoFull">
      <Text />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0 w-[164px]" data-name="Logo">
      <LogoFull />
      <LogoFull1 />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Medium',sans-serif] font-medium gap-[32px] items-center leading-[normal] overflow-clip relative shrink-0 text-[#4a5a4a] text-[14px] whitespace-nowrap" data-name="Nav Links">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>{`Who It's For`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Features
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pricing
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        FAQ
      </p>
    </div>
  );
}

function NavCta() {
  return (
    <div className="bg-[#00351d] content-stretch flex items-start overflow-clip px-[24px] py-[10px] relative rounded-[999px] shrink-0" data-name="Nav CTA">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Try Free</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[rgba(246,251,243,0.95)] content-stretch flex h-[64px] items-center justify-between overflow-clip px-[120px] relative shrink-0 w-[1440px]" data-name="Nav">
      <Logo />
      <NavLinks />
      <NavCta />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f5ecd0] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[999px] shrink-0" data-name="Badge">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">⭐ Built for Filipino Churches</p>
    </div>
  );
}

function Frame() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame1() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame2() {
  return <div className="h-[32px] shrink-0 w-px" data-name="Frame" />;
}

function PrimaryCta() {
  return (
    <div className="bg-[#1a6640] content-stretch flex items-start overflow-clip px-[28px] py-[14px] relative rounded-[999px] shrink-0" data-name="Primary CTA">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">Try StewardTrack Free</p>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="Secondary CTA">
      <div className="content-stretch flex items-start overflow-clip px-[28px] py-[14px] relative rounded-[inherit]">
        <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00351d] text-[15px] whitespace-nowrap">See how it works</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,53,29,0.22)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="CTA Buttons">
      <PrimaryCta />
      <SecondaryCta />
    </div>
  );
}

function Frame3() {
  return <div className="h-[32px] shrink-0 w-px" data-name="Frame" />;
}

function Stat() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Stat">
      <p className="font-['Urbanist:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold relative shrink-0 text-[#00351d] text-[26px]">₱0 to start</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        No credit card needed
      </p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Stat">
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#00351d] text-[26px]">10 min</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Setup time
      </p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Stat">
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#00351d] text-[26px]">100%</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your data, always
      </p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex gap-[40px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Stats">
      <Stat />
      <Stat1 />
      <Stat2 />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Hero Content">
      <Badge />
      <Frame />
      <div className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#1a6640] text-[56px] tracking-[-1.12px] w-[560px]">
        <p className="leading-[62px] mb-0">Your faithful work</p>
        <p>
          <span className="leading-[62px]">{`deserves `}</span>
          <span className="leading-[62px] text-[#b8973a]">better tools</span>
        </p>
      </div>
      <Frame1 />
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4a5a4a] text-[17px] w-[480px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">One platform for your people, finances, and ministry.</p>
        <p className="leading-[28px]">Replace notebooks with clarity — without losing control.</p>
      </div>
      <Frame2 />
      <CtaButtons />
      <Frame3 />
      <Stats />
    </div>
  );
}

function Topbar() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Topbar">
      <div className="bg-[#ff5f57] rounded-[999px] shrink-0 size-[9px]" data-name="Rectangle" />
      <div className="bg-[#febc2e] rounded-[999px] shrink-0 size-[9px]" data-name="Rectangle" />
      <div className="bg-[#28c840] rounded-[999px] shrink-0 size-[9px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a5a4a] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`   Treasury Overview`}</p>
    </div>
  );
}

function Kpi() {
  return (
    <div className="bg-[#eaf3e5] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="KPI">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[16px] py-[14px] relative w-full whitespace-nowrap">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#4a5a4a] text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Total Giving
          </p>
          <p className="font-['Urbanist:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold relative shrink-0 text-[#00351d] text-[22px]">₱184,500</p>
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#b8973a] text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            ↑ 12% this month
          </p>
        </div>
      </div>
    </div>
  );
}

function Kpi1() {
  return (
    <div className="bg-[#eaf3e5] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="KPI">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[16px] py-[14px] relative w-full whitespace-nowrap">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#4a5a4a] text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Active Members
          </p>
          <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#00351d] text-[22px]">342</p>
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#b8973a] text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            ↑ 8 new this week
          </p>
        </div>
      </div>
    </div>
  );
}

function KpIs() {
  return (
    <div className="content-stretch flex gap-[12px] h-[87px] items-start overflow-clip relative shrink-0 w-[520px]" data-name="KPIs">
      <Kpi />
      <Kpi1 />
    </div>
  );
}

function Track() {
  return (
    <div className="bg-[#ddecd6] content-stretch flex h-[6px] items-start overflow-clip relative rounded-[99px] shrink-0 w-[340px]" data-name="Track">
      <div className="bg-[#1a6640] h-[6px] rounded-[99px] shrink-0 w-[265.2px]" data-name="Rectangle" />
    </div>
  );
}

function BarRow() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[488px]" data-name="Bar Row">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#181d18] text-[11px] w-[60px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Worship
      </p>
      <Track />
      <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        ₱23,400
      </p>
    </div>
  );
}

function Track1() {
  return (
    <div className="bg-[#ddecd6] content-stretch flex h-[6px] items-start overflow-clip relative rounded-[99px] shrink-0 w-[340px]" data-name="Track">
      <div className="bg-[#1a6640] h-[6px] rounded-[99px] shrink-0 w-[187px]" data-name="Rectangle" />
    </div>
  );
}

function BarRow1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[488px]" data-name="Bar Row">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#181d18] text-[11px] w-[60px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Youth
      </p>
      <Track1 />
      <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        ₱16,500
      </p>
    </div>
  );
}

function Track2() {
  return (
    <div className="bg-[#ddecd6] content-stretch flex h-[6px] items-start overflow-clip relative rounded-[99px] shrink-0 w-[340px]" data-name="Track">
      <div className="bg-[#1a6640] h-[6px] rounded-[99px] shrink-0 w-[136px]" data-name="Rectangle" />
    </div>
  );
}

function BarRow2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[488px]" data-name="Bar Row">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#181d18] text-[11px] w-[60px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Outreach
      </p>
      <Track2 />
      <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        ₱12,000
      </p>
    </div>
  );
}

function BudgetBars() {
  return (
    <div className="bg-[#eaf3e5] relative rounded-[12px] shrink-0 w-full" data-name="Budget Bars">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Ministry Budgets
          </p>
          <BarRow />
          <BarRow1 />
          <BarRow2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex gap-[6px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[6px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181d18] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        342 Members
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex gap-[6px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[6px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181d18] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        28 Families
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex gap-[6px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[6px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181d18] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        5 Ministries
      </p>
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[504px]" data-name="Chips">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[319px] items-start left-[581px] overflow-clip p-[20px] rounded-[24px] shadow-[0px_32px_80px_0px_rgba(0,53,29,0.12)] top-[335px] w-[560px]" data-name="Dashboard Mock">
      <Topbar />
      <KpIs />
      <BudgetBars />
      <Chips />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#f6fbf3] content-stretch flex gap-[64px] items-end overflow-clip pb-[80px] pt-[100px] px-[120px] relative shrink-0 w-[1440px]" data-name="Hero">
      <HeroContent />
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "right center", transform: "scale(1.18)", transformOrigin: "right center" }}
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo2}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #f6fbf3 35%, rgba(246,251,243,0.7) 55%, transparent 75%)" }} />
      <DashboardMock />
    </div>
  );
}

function WhoHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-[942px]" data-name="Who Header">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d4af55] text-[12px] whitespace-nowrap">{`— Who It's For`}</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[0] relative shrink-0 text-[40px] text-center text-white tracking-[-0.6px] w-[878px]">
        <span className="leading-[48px]">Built for Everyone Who</span>
        <span className="leading-[48px] text-[#6fde38]">{` `}</span>
        <span className="leading-[48px] text-[#b8973a]">Serves Your Church</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.62)] text-center w-[726px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`StewardTrack gives each role the tools they need — without the complexity they don't.`}</p>
    </div>
  );
}

function Frame7() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame8() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame9() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame10() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function ChurchAdministrators() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Church Administrators">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] shrink-0 size-[44px]" data-name="Rectangle" />
          <Frame7 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[20px] relative shrink-0 text-[14px] text-white w-[180px]">Church Administrators</p>
          <Frame8 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.58)] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Manage the whole platform, user access, and church-wide settings from one place.
          </p>
          <Frame9 />
          <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-[180px]" data-name="Rectangle" />
          <Frame10 />
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] leading-[normal] relative shrink-0 text-[#d4af55] text-[11px] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Full system control and audit trail
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame12() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame13() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame14() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function PastorsMinistryLeaders() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Pastors & Ministry Leaders">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] shrink-0 size-[44px]" data-name="Rectangle" />
          <Frame11 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[20px] relative shrink-0 text-[14px] text-white w-[180px]">{`Pastors & Ministry Leaders`}</p>
          <Frame12 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.58)] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            See your congregation at a glance — attendance, care plans, and ministry progress.
          </p>
          <Frame13 />
          <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-[180px]" data-name="Rectangle" />
          <Frame14 />
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] leading-[normal] relative shrink-0 text-[#d4af55] text-[11px] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Bird's-eye view of the whole church`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame16() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame17() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame18() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function TreasurersFinanceTeams() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Treasurers & Finance Teams">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] shrink-0 size-[44px]" data-name="Rectangle" />
          <Frame15 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[20px] relative shrink-0 text-[14px] text-white w-[180px]">{`Treasurers & Finance Teams`}</p>
          <Frame16 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.58)] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Record every transaction, generate financial reports, and prepare for audits.
          </p>
          <Frame17 />
          <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-[180px]" data-name="Rectangle" />
          <Frame18 />
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] leading-[normal] relative shrink-0 text-[#d4af55] text-[11px] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Audit-ready books in minutes, not days
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame20() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame21() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame22() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Secretaries() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Secretaries">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] shrink-0 size-[44px]" data-name="Rectangle" />
          <Frame19 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[20px] relative shrink-0 text-[14px] text-white w-[180px]">Secretaries</p>
          <Frame20 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.58)] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Manage member records, schedule events, and handle communications in one place.
          </p>
          <Frame21 />
          <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-[180px]" data-name="Rectangle" />
          <Frame22 />
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] leading-[normal] relative shrink-0 text-[#d4af55] text-[11px] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Less admin chaos, more done
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame24() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame25() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame26() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function VolunteersMembers() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Volunteers & Members">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative w-full">
          <div className="bg-[rgba(184,151,58,0.22)] rounded-[10px] shrink-0 size-[44px]" data-name="Rectangle" />
          <Frame23 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[20px] relative shrink-0 text-[14px] text-white w-[180px]">{`Volunteers & Members`}</p>
          <Frame24 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.58)] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Participate in events, give online, and stay connected with church activities.
          </p>
          <Frame25 />
          <div className="bg-[rgba(255,255,255,0.12)] h-px shrink-0 w-[180px]" data-name="Rectangle" />
          <Frame26 />
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] leading-[normal] relative shrink-0 text-[#d4af55] text-[11px] w-[180px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Stay engaged from anywhere
          </p>
        </div>
      </div>
    </div>
  );
}

function WhoCards() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Who Cards">
      <ChurchAdministrators />
      <PastorsMinistryLeaders />
      <TreasurersFinanceTeams />
      <Secretaries />
      <VolunteersMembers />
    </div>
  );
}

function WhoBenefits() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Who Benefits" style={{ backgroundImage: "linear-gradient(68.6723deg, rgb(0, 53, 29) 13.119%, rgb(0, 155, 85) 103.35%)" }}>
      <WhoHeader />
      <WhoCards />
    </div>
  );
}

function Num() {
  return (
    <div className="bg-[#c0392b] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-name="Num 1">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#181d18] text-[13px] w-[440px]">Records Live Only in Notebooks</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[440px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        One lost notebook and years of faithful work disappear forever.
      </p>
    </div>
  );
}

function Pain() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip py-[16px] relative shrink-0" data-name="Pain 1">
      <Num />
      <Text1 />
    </div>
  );
}

function Num1() {
  return (
    <div className="bg-[#c0392b] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-name="Num 2">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#181d18] text-[13px] w-[440px]">{`You're the Only One Who Understands`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[440px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        If you leave, the system collapses. No one else knows where anything is.
      </p>
    </div>
  );
}

function Pain1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip py-[16px] relative shrink-0" data-name="Pain 2">
      <Num1 />
      <Text2 />
    </div>
  );
}

function Num2() {
  return (
    <div className="bg-[#c0392b] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-name="Num 3">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#181d18] text-[13px] w-[440px]">Finding Old Records Is Detective Work</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[440px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A 2-year-old donation query takes an hour of notebook hunting.
      </p>
    </div>
  );
}

function Pain2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip py-[16px] relative shrink-0" data-name="Pain 3">
      <Num2 />
      <Text3 />
    </div>
  );
}

function Num3() {
  return (
    <div className="bg-[#c0392b] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-name="Num 4">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">4</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#181d18] text-[13px] w-[440px]">Audit Season Causes Panic</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[440px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Your integrity feels attacked when records don't match up.`}</p>
    </div>
  );
}

function Pain3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip py-[16px] relative shrink-0" data-name="Pain 4">
      <Num3 />
      <Text4 />
    </div>
  );
}

function Num4() {
  return (
    <div className="bg-[#c0392b] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[30px]" data-name="Num 5">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#181d18] text-[13px] w-[440px]">Members Question Transparency</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[440px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`You can't answer confidently. The numbers aren't at your fingertips.`}</p>
    </div>
  );
}

function Pain4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip py-[16px] relative shrink-0" data-name="Pain 5">
      <Num4 />
      <Text5 />
    </div>
  );
}

function PainVisual() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[28px] relative rounded-[24px] shadow-[0px_20px_60px_0px_rgba(0,51,26,0.1)] shrink-0 w-[560px]" data-name="Pain Visual">
      <Pain />
      <div className="bg-[rgba(0,53,29,0.07)] h-px shrink-0 w-[504px]" data-name="Rectangle" />
      <Pain1 />
      <div className="bg-[rgba(0,53,29,0.07)] h-px shrink-0 w-[504px]" data-name="Rectangle" />
      <Pain2 />
      <div className="bg-[rgba(0,53,29,0.07)] h-px shrink-0 w-[504px]" data-name="Rectangle" />
      <Pain3 />
      <div className="bg-[rgba(0,53,29,0.07)] h-px shrink-0 w-[504px]" data-name="Rectangle" />
      <Pain4 />
    </div>
  );
}

function Frame27() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame28() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame29() {
  return <div className="h-[32px] shrink-0 w-px" data-name="Frame" />;
}

function Frame30() {
  return (
    <div className="bg-[#00351d] content-stretch flex items-start overflow-clip px-[28px] py-[14px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">See the Solution</p>
    </div>
  );
}

function PainCopy() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[384px] items-start min-h-px min-w-px overflow-clip relative" data-name="Pain Copy">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">— Sound Familiar?</p>
      <Frame27 />
      <div className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[166px] leading-[0] relative shrink-0 text-[#1a6640] text-[40px] tracking-[-0.6px] w-[546px]">
        <p className="leading-[50px] mb-0">Your notebooks show</p>
        <p className="leading-[50px] mb-0">your dedication.</p>
        <p className="leading-[50px]">{`And they're holding you back.`}</p>
      </div>
      <Frame28 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[26px] relative shrink-0 text-[#4a5a4a] text-[16px] w-[420px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`You've been doing this faithfully for years. These aren't failures — they're signs it's time for better tools.`}</p>
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function PainPoints() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex gap-[80px] items-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Pain Points">
      <PainVisual />
      <PainCopy />
    </div>
  );
}

function ModulesHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Modules Header">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">— Platform Modules</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[0] relative shrink-0 text-[#1a6640] text-[40px] text-center tracking-[-0.6px] w-[700px]">
        <span className="leading-[48px]">{`Built for the Work `}</span>
        <span className="leading-[48px] text-[#b8973a]">You Actually Do</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[26px] relative shrink-0 text-[#4a5a4a] text-[16px] text-center w-[500px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Organized around your church — not corporate finance jargon.
      </p>
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex h-[140px] items-center justify-center overflow-clip pr-[35px] relative shrink-0 w-[280px]" data-name="Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#134d30] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBanner} />
      </div>
      <div className="mr-[-35px] relative shrink-0 size-[120px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, #1A6640)" fillOpacity="0.4" id="Ellipse" r="60" />
        </svg>
      </div>
      <div className="mr-[-35px] relative shrink-0 size-[60px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #B8973A)" fillOpacity="0.25" id="Ellipse" r="30" />
        </svg>
      </div>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] mr-[-35px] relative shrink-0 text-[48px] text-[rgba(255,255,255,0.15)] whitespace-nowrap">C</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] mr-[-35px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Community</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f5ecd0] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[10px] whitespace-nowrap">All Tiers</p>
    </div>
  );
}

function Frame32() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame33() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Feat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Member profiles & giving history`}</p>
    </div>
  );
}

function Feat1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Families & relationships`}</p>
    </div>
  );
}

function Feat2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pastoral care tracking
      </p>
    </div>
  );
}

function Feat3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discipleship growth paths
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-[16px] px-[20px] relative shrink-0" data-name="Body">
      <Frame31 />
      <Frame32 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Know your people. Track giving. Understand your congregation.
      </p>
      <Frame33 />
      <Feat />
      <Feat1 />
      <Feat2 />
      <Feat3 />
    </div>
  );
}

function Community() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,51,26,0.06)]" data-name="Community">
      <Banner />
      <Body />
    </div>
  );
}

function Banner1() {
  return (
    <div className="content-stretch flex h-[140px] items-center justify-center overflow-clip pr-[31px] relative shrink-0 w-[280px]" data-name="Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#7a5e18] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[266.67%] left-[0.24%] max-w-none top-[-91.34%] w-full" src={imgBanner1} />
        </div>
      </div>
      <div className="mr-[-31px] relative shrink-0 size-[120px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, #B8973A)" fillOpacity="0.4" id="Ellipse" r="60" />
        </svg>
      </div>
      <div className="mr-[-31px] relative shrink-0 size-[60px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #B8973A)" fillOpacity="0.25" id="Ellipse" r="30" />
        </svg>
      </div>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] mr-[-31px] relative shrink-0 text-[48px] text-[rgba(255,255,255,0.15)] whitespace-nowrap">S</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] mr-[-31px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Stewardship</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#fff3d0] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8a6020] text-[10px] whitespace-nowrap">Professional</p>
    </div>
  );
}

function Frame35() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame36() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Feat4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Record donations & expenses`}</p>
    </div>
  );
}

function Feat5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Online giving integration
      </p>
    </div>
  );
}

function Feat6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ministry budgets
      </p>
    </div>
  );
}

function Feat7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Audit-ready financial reports
      </p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-[16px] px-[20px] relative shrink-0" data-name="Body">
      <Frame34 />
      <Frame35 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Track every peso. See where God's money is going.`}</p>
      <Frame36 />
      <Feat4 />
      <Feat5 />
      <Feat6 />
      <Feat7 />
    </div>
  );
}

function Stewardship() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,51,26,0.06)]" data-name="Stewardship">
      <Banner1 />
      <Body1 />
    </div>
  );
}

function Banner2() {
  return (
    <div className="content-stretch flex h-[140px] items-center justify-center overflow-clip pr-[28px] relative shrink-0 w-[280px]" data-name="Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#1a4a6a] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBanner2} />
      </div>
      <div className="mr-[-28px] relative shrink-0 size-[120px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, #2E7BAA)" fillOpacity="0.4" id="Ellipse" r="60" />
        </svg>
      </div>
      <div className="mr-[-28px] relative shrink-0 size-[60px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #B8973A)" fillOpacity="0.25" id="Ellipse" r="30" />
        </svg>
      </div>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] mr-[-28px] relative shrink-0 text-[48px] text-[rgba(255,255,255,0.15)] whitespace-nowrap">P</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] mr-[-28px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Planning</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#e8f4f8] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f5c7a] text-[10px] whitespace-nowrap">Premium+</p>
    </div>
  );
}

function Frame38() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame39() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Feat8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Church event calendar
      </p>
    </div>
  );
}

function Feat9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Service scheduling
      </p>
    </div>
  );
}

function Feat10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Volunteer coordination
      </p>
    </div>
  );
}

function Feat11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Ministry teams & goals`}</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-[16px] px-[20px] relative shrink-0" data-name="Body">
      <Frame37 />
      <Frame38 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Organize events, coordinate ministries, set goals.
      </p>
      <Frame39 />
      <Feat8 />
      <Feat9 />
      <Feat10 />
      <Feat11 />
    </div>
  );
}

function Planning() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,51,26,0.06)]" data-name="Planning">
      <Banner2 />
      <Body2 />
    </div>
  );
}

function Banner3() {
  return (
    <div className="content-stretch flex h-[140px] items-center justify-center overflow-clip pr-[35px] relative shrink-0 w-[280px]" data-name="Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#1d2a50] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBanner3} />
      </div>
      <div className="mr-[-35px] relative shrink-0 size-[120px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, #00351D)" fillOpacity="0.4" id="Ellipse" r="60" />
        </svg>
      </div>
      <div className="mr-[-35px] relative shrink-0 size-[60px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #B8973A)" fillOpacity="0.25" id="Ellipse" r="30" />
        </svg>
      </div>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] mr-[-35px] relative shrink-0 text-[48px] text-[rgba(255,255,255,0.15)] whitespace-nowrap">C</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] mr-[-35px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Communication</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#f5ecd0] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[10px] whitespace-nowrap">All Tiers</p>
    </div>
  );
}

function Frame41() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame42() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Feat12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Email & SMS campaigns`}</p>
    </div>
  );
}

function Feat13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Facebook messaging
      </p>
    </div>
  );
}

function Feat14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Message templates
      </p>
    </div>
  );
}

function Feat15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[6px] relative shrink-0" data-name="feat">
      <div className="bg-[#1a6640] rounded-[99px] shrink-0 size-[5px]" data-name="Rectangle" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Targeted outreach
      </p>
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-[16px] px-[20px] relative shrink-0" data-name="Body">
      <Frame40 />
      <Frame41 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[18px] relative shrink-0 text-[#4a5a4a] text-[12px] w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reach your people. Keep everyone informed.
      </p>
      <Frame42 />
      <Feat12 />
      <Feat13 />
      <Feat14 />
      <Feat15 />
    </div>
  );
}

function Communication() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,51,26,0.06)]" data-name="Communication">
      <Banner3 />
      <Body3 />
    </div>
  );
}

function ModuleGrid() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Module Grid">
      <Community />
      <Stewardship />
      <Planning />
      <Communication />
    </div>
  );
}

function PlatformModules() {
  return (
    <div className="bg-[#f6fbf3] content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Platform Modules">
      <ModulesHeader />
      <ModuleGrid />
    </div>
  );
}

function HowHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="How Header">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d4af55] text-[12px] whitespace-nowrap">— Getting Started</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[48px] relative shrink-0 text-[40px] text-center text-white tracking-[-0.6px] w-[700px]">You + StewardTrack as Partners</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.62)] text-center w-[500px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Simple setup. You stay in complete control.
      </p>
    </div>
  );
}

function StepCircle() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[999px] shrink-0 size-[68px]" data-name="Step Circle">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          ✉
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px overflow-clip relative" data-name="Step 1">
      <StepCircle />
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[16px] text-center text-white w-[240px]">Sign Up Free</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] text-center w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Email + password. No credit card. No pressure.
      </p>
    </div>
  );
}

function StepCircle1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[999px] shrink-0 size-[68px]" data-name="Step Circle">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          ⛪
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px overflow-clip relative" data-name="Step 2">
      <StepCircle1 />
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[16px] text-center text-white w-[240px]">Set Up Your Church</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] text-center w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enter your church name, accounts, and giving categories.
      </p>
    </div>
  );
}

function StepCircle2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[999px] shrink-0 size-[68px]" data-name="Step Circle">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          ✍
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px overflow-clip relative" data-name="Step 3">
      <StepCircle2 />
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[16px] text-center text-white w-[240px]">You Start Entering</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] text-center w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Every donation, every expense — you enter it. StewardTrack remembers it forever.
      </p>
    </div>
  );
}

function StepCircle3() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[999px] shrink-0 size-[68px]" data-name="Step Circle">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          📊
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px overflow-clip relative" data-name="Step 4">
      <StepCircle3 />
      <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[16px] text-center text-white w-[240px]">You See Clearly</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] text-center w-[240px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reports, totals, giving trends — answered instantly.
      </p>
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Steps">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center justify-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="How It Works" style={{ backgroundImage: "linear-gradient(65.7285deg, rgb(0, 53, 29) 13.119%, rgb(0, 155, 85) 103.35%)" }}>
      <HowHeader />
      <Steps />
    </div>
  );
}

function TestiHdr() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Testi Hdr">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">— Real Stories</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[48px] relative shrink-0 text-[#1a6640] text-[40px] text-center tracking-[-0.6px] w-[700px]">From Faithful Church Leaders Like You</p>
    </div>
  );
}

function Frame43() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame44() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame45() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame46() {
  return (
    <div className="bg-[#1a6640] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[38px]" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">M</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Name">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[#181d18] text-[13px]">Maria</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[11px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Treasurer, 300-member church, Metro Manila
      </p>
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Author">
      <Frame46 />
      <Name />
    </div>
  );
}

function Maria() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,51,26,0.06)]" data-name="Maria">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[28px] relative w-full">
          <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b8973a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            ★★★★★
          </p>
          <Frame43 />
          <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#b8973a] text-[48px] whitespace-nowrap">{`"`}</p>
          <Frame44 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[88px] leading-[21px] relative shrink-0 text-[#181d18] text-[13px] w-[340px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`I can see all our member giving at a glance. The giving categories organize themselves. I actually understand my church's finances better now. I can explain everything to the board with confidence.`}</p>
          <Frame45 />
          <Author />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame48() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame49() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame50() {
  return (
    <div className="bg-[#b8973a] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[38px]" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">P</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Name">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[#181d18] text-[13px]">Pastor Jose</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[11px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Rural church, Visayas
      </p>
    </div>
  );
}

function Author1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Author">
      <Frame50 />
      <Name1 />
    </div>
  );
}

function PastorJose() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,51,26,0.06)]" data-name="Pastor Jose">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[28px] relative w-full">
          <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b8973a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            ★★★★★
          </p>
          <Frame47 />
          <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#b8973a] text-[48px] whitespace-nowrap">{`"`}</p>
          <Frame48 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[88px] leading-[21px] relative shrink-0 text-[#181d18] text-[13px] w-[340px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`I still enter every transaction myself, but now they're instantly recorded and safe. I know where God's money is going. The records are audit-ready. That's what matters.`}</p>
          <Frame49 />
          <Author1 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame52() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame53() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame54() {
  return (
    <div className="bg-[#2e6b8a] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[38px]" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">A</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Name">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[#181d18] text-[13px]">Admin Lead</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4a5a4a] text-[11px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Community church, Luzon
      </p>
    </div>
  );
}

function Author2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Author">
      <Frame54 />
      <Name2 />
    </div>
  );
}

function AdminLead() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,51,26,0.06)]" data-name="Admin Lead">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[28px] relative w-full">
          <p className="font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b8973a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            ★★★★★
          </p>
          <Frame51 />
          <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#b8973a] text-[48px] whitespace-nowrap">{`"`}</p>
          <Frame52 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[88px] leading-[21px] relative shrink-0 text-[#181d18] text-[13px] w-[340px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Our auditors used to find discrepancies. Now every transaction is documented. Audits are just a conversation. StewardTrack didn't take my job — it made me better at it.`}</p>
          <Frame53 />
          <Author2 />
        </div>
      </div>
    </div>
  );
}

function TestiGrid() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Testi Grid">
      <Maria />
      <PastorJose />
      <AdminLead />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Testimonials">
      <TestiHdr />
      <TestiGrid />
    </div>
  );
}

function PriceHdr() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Price Hdr">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">— Simple Pricing</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[48px] relative shrink-0 text-[#1a6640] text-[40px] text-center tracking-[-0.6px] w-[700px]">For Churches of Any Size</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[normal] relative shrink-0 text-[#4a5a4a] text-[16px] text-center w-[500px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Start free. Upgrade when you're ready. No hidden costs.`}</p>
    </div>
  );
}

function Frame55() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame56() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame57() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat16() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame58 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Community module
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat17() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame59 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Member profiles & records`}</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat18() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame60 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Communication tools
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat19() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame61 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Up to 500 members
      </p>
    </div>
  );
}

function Frame62() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame63() {
  return (
    <div className="h-[10px] relative rounded-[999px] shrink-0 w-[260px]" data-name="Frame">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[13px] relative size-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00351d] text-[14px] whitespace-nowrap">Get Started Free</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,53,29,0.22)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Essential() {
  return (
    <div className="bg-[#eaf3e5] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Essential">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[32px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap">Essential</p>
          <Frame55 />
          <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#00351d] text-[36px] whitespace-nowrap">Free</p>
          <Frame56 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a5a4a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            forever · up to 500 members
          </p>
          <Frame57 />
          <Feat16 />
          <Feat17 />
          <Feat18 />
          <Feat19 />
          <Frame62 />
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#b8973a] content-stretch flex items-center overflow-clip px-[14px] py-[5px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Most Popular</p>
    </div>
  );
}

function Frame65() {
  return <div className="h-[16px] shrink-0 w-px" data-name="Frame" />;
}

function Frame66() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame67() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame68() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame69() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #D4AF55)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat20() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame69 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Everything in Essential
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #D4AF55)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat21() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame70 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Planning module
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #D4AF55)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat22() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame71 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Event & scheduling tools`}</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #D4AF55)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat23() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame72 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Volunteer coordination
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #D4AF55)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat24() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame73 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Unlimited members
      </p>
    </div>
  );
}

function Frame74() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame75() {
  return (
    <div className="bg-[#b8973a] h-[10px] relative rounded-[999px] shrink-0 w-[260px]" data-name="Frame">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[13px] relative size-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Start Premium Trial</p>
        </div>
      </div>
    </div>
  );
}

function Premium() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_24px_64px_0px_rgba(0,51,26,0.22)]" data-name="Premium" style={{ backgroundImage: "linear-gradient(92.3289deg, rgb(0, 53, 29) 13.875%, rgb(0, 155, 85) 175.18%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[32px] relative w-full">
          <Frame64 />
          <Frame65 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.58)] whitespace-nowrap">Premium</p>
          <Frame66 />
          <p className="font-['Urbanist:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[36px] text-white whitespace-nowrap">₱2,990</p>
          <Frame67 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            per month · unlimited members
          </p>
          <Frame68 />
          <Feat20 />
          <Feat21 />
          <Feat22 />
          <Feat23 />
          <Feat24 />
          <Frame74 />
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function Frame77() {
  return <div className="h-[4px] shrink-0 w-px" data-name="Frame" />;
}

function Frame78() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame79() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat25() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame79 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Everything in Premium
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat26() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame80 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Full Stewardship module
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat27() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame81 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Online donations
      </p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat28() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame82 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Financial reports & audits`}</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <circle cx="8" cy="8" fill="var(--fill-0, #1A6640)" id="Ellipse" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Feat29() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip pb-[10px] relative shrink-0" data-name="feat">
      <Frame83 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#181d18] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Priority support
      </p>
    </div>
  );
}

function Frame84() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function Frame85() {
  return (
    <div className="h-[10px] relative rounded-[999px] shrink-0 w-[260px]" data-name="Frame">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[13px] relative size-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00351d] text-[14px] whitespace-nowrap">Start Professional Trial</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,53,29,0.22)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Professional() {
  return (
    <div className="bg-[#eaf3e5] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Professional">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] py-[32px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4a5a4a] text-[11px] whitespace-nowrap">Professional</p>
          <Frame76 />
          <p className="font-['Urbanist:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#00351d] text-[36px] whitespace-nowrap">₱7,990</p>
          <Frame77 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4a5a4a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            per month · full platform
          </p>
          <Frame78 />
          <Feat25 />
          <Feat26 />
          <Feat27 />
          <Feat28 />
          <Feat29 />
          <Frame84 />
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function PriceGrid() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[960px]" data-name="Price Grid">
      <Essential />
      <Premium />
      <Professional />
    </div>
  );
}

function Pricing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Pricing">
      <PriceHdr />
      <PriceGrid />
    </div>
  );
}

function TrustHdr() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Trust Hdr">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b8973a] text-[12px] whitespace-nowrap">— Your Concerns, Answered</p>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[48px] relative shrink-0 text-[#00351d] text-[40px] text-center tracking-[-0.6px] w-[700px]">Your Deepest Fears, Directly Addressed</p>
    </div>
  );
}

function Frame86() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame87() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame88() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame89() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame90() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function LosingControl() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Losing Control">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame86 />
          <Frame87 />
          <Frame88 />
          <Frame89 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Losing Control</p>
          <Frame90 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Everything stays in your hands. You enter every transaction. Download all your data anytime — it belongs to you, not us.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame92() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame93() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame94() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame95() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function NotUnderstandingTheSystem() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Not Understanding the System">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame91 />
          <Frame92 />
          <Frame93 />
          <Frame94 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Not Understanding the System</p>
          <Frame95 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            We speak Filipino. No tech jargon. Simple interface. Our support team has helped churches exactly like yours.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame97() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame98() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame99() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame100() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function BeingReplaced() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Being Replaced">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame96 />
          <Frame97 />
          <Frame98 />
          <Frame99 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Being Replaced</p>
          <Frame100 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`We're not here to replace you. StewardTrack frees you from tedious repetition so you can focus on what truly matters.`}</p>
        </div>
      </div>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Trust Row 1">
      <LosingControl />
      <NotUnderstandingTheSystem />
      <BeingReplaced />
    </div>
  );
}

function Frame101() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame102() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame103() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame104() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame105() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function DataSecurity() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Data Security">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame101 />
          <Frame102 />
          <Frame103 />
          <Frame104 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Data Security</p>
          <Frame105 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Bank-level encryption. Daily automatic backups. More secure than any filing cabinet or external drive.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame107() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame108() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame109() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame110() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function CompanyDisappearing() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Company Disappearing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame106 />
          <Frame107 />
          <Frame108 />
          <Frame109 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Company Disappearing</p>
          <Frame110 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`We're Filipinos serving Filipino churches. Not VC-backed. Sustainable and committed to your church long-term.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return <div className="h-[12px] shrink-0 w-px" data-name="Frame" />;
}

function Frame112() {
  return <div className="h-[10px] shrink-0 w-px" data-name="Frame" />;
}

function Frame113() {
  return <div className="bg-[#e8f4ed] rounded-[12px] shrink-0 size-[44px]" data-name="Frame" />;
}

function Frame114() {
  return <div className="h-[14px] shrink-0 w-px" data-name="Frame" />;
}

function Frame115() {
  return <div className="h-[8px] shrink-0 w-px" data-name="Frame" />;
}

function LookingLessCapable() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_2px_12px_0px_rgba(0,51,26,0.05)]" data-name="Looking Less Capable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c0392b] text-[10px] whitespace-nowrap">FEAR</p>
          <Frame111 />
          <Frame112 />
          <Frame113 />
          <Frame114 />
          <p className="font-['Urbanist:Bold',sans-serif] font-bold h-[40px] leading-[normal] relative shrink-0 text-[#00351d] text-[15px] w-[330px]">Looking Less Capable</p>
          <Frame115 />
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] relative shrink-0 text-[#4a5a4a] text-[13px] w-[330px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`You'll look MORE prepared. Better reports. Instant answers. Your board will see you as more in control, not less.`}</p>
        </div>
      </div>
    </div>
  );
}

function TrustRow1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[1200px]" data-name="Trust Row 2">
      <DataSecurity />
      <CompanyDisappearing />
      <LookingLessCapable />
    </div>
  );
}

function TrustSection() {
  return (
    <div className="bg-[#eaf3e5] content-stretch flex flex-col gap-[48px] items-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="Trust Section">
      <TrustHdr />
      <TrustRow />
      <TrustRow1 />
    </div>
  );
}

function Frame116() {
  return <div className="h-[20px] shrink-0 w-px" data-name="Frame" />;
}

function Frame117() {
  return <div className="h-[40px] shrink-0 w-px" data-name="Frame" />;
}

function CtaButton() {
  return (
    <div className="bg-[#b8973a] content-stretch flex items-start overflow-clip px-[40px] py-[18px] relative rounded-[999px] shadow-[0px_8px_30px_0px_rgba(184,150,59,0.35)] shrink-0" data-name="CTA Button">
      <p className="font-['Urbanist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[17px] text-white whitespace-nowrap">Start Your Free Account Today</p>
    </div>
  );
}

function Frame118() {
  return <div className="h-[24px] shrink-0 w-px" data-name="Frame" />;
}

function FinalCta() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[120px] py-[100px] relative shrink-0 w-[1440px]" data-name="Final CTA" style={{ backgroundImage: "linear-gradient(63.438deg, rgb(0, 53, 29) 13.119%, rgb(0, 155, 85) 103.35%)" }}>
      <p className="font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[60px] relative shrink-0 text-[52px] text-center text-white tracking-[-1.04px] w-[800px]">Ready to Honor Your Sacred Work?</p>
      <Frame116 />
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.65)] text-center w-[560px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Try StewardTrack free. No credit card. No obligation.</p>
        <p className="leading-[28px]">Just better tools for faithful stewards.</p>
      </div>
      <Frame117 />
      <CtaButton />
      <Frame118 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal h-[40px] leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.38)] text-center w-[560px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Built by Filipinos for Filipino churches · Simple. Secure. Solution-Focused.
      </p>
    </div>
  );
}

function LogoFull3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115px]" data-name="LogoFull">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFull1} />
    </div>
  );
}

function Text6() {
  return <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px" data-name="Text" />;
}

function LogoFull2() {
  return (
    <div className="content-stretch flex gap-[5px] h-[30px] items-center relative shrink-0 w-[127px]" data-name="LogoFull">
      <LogoFull3 />
      <Text6 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[24px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] text-[rgba(255,255,255,0.38)] whitespace-nowrap" data-name="Footer Links">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        docs.stewardtrack.com
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Privacy
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Terms
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0c2115] content-stretch flex h-[64px] items-center justify-between overflow-clip px-[120px] relative shrink-0 w-[1440px]" data-name="Footer">
      <LogoFull2 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.38)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2026 StewardTrack. All rights reserved.
      </p>
      <FooterLinks />
    </div>
  );
}

export default function StewardTrackLandingPage() {
  return (
    <div className="bg-[#f6fbf3] content-stretch flex flex-col items-start relative size-full" data-name="StewardTrack Landing Page">
      <Nav />
      <Hero />
      <WhoBenefits />
      <PainPoints />
      <PlatformModules />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <TrustSection />
      <FinalCta />
      <Footer />
    </div>
  );
}