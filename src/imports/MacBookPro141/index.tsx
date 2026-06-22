import svgPaths from "./svg-as91ft63kz";
import imgImageFitnessTraining from "./84601a72623e11eaf461f5da5194e98528792350.png";

function Logo() {
  return (
    <div className="h-[60.475px] relative shrink-0 w-[95.518px]" data-name="Logo">
      <div className="absolute inset-[-0.83%_-0.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.5172 61.4745">
          <g id="Logo">
            <g id="Vector 1">
              <path d={svgPaths.p153aaaf0} fill="var(--fill-0, #B6FF3B)" />
              <path d={svgPaths.pc7ff500} fill="var(--fill-0, #B6FF3B)" />
              <path d={svgPaths.p153aaaf0} stroke="var(--stroke-0, #0A0A0A)" />
              <path d={svgPaths.pc7ff500} stroke="var(--stroke-0, #0A0A0A)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[32px] items-center leading-[0] relative shrink-0 text-[#b6ff3b] text-[14px] tracking-[0.1px] whitespace-nowrap" data-name="Nav bar">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Come Funziona</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Download l’app</p>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[415px]" data-name="Left side">
      <Logo />
      <NavBar />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[16.67%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p7662700} fill="var(--fill-0, #0A0A0A)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Sign up</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#b6ff3b] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[80.475px] relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[8px] relative size-full">
          <LeftSide />
          <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#b6ff3b] text-[35px]">MUOVENTO</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[565px]" data-name="Heading 1">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[96px] not-italic relative shrink-0 text-[96px] text-white w-full">Allenati</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[96px] not-italic relative shrink-0 text-[96px] text-white w-full">dove vuoi,</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[96px] not-italic relative shrink-0 text-[96px] text-white w-full">quando vuoi</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[39px] not-italic relative shrink-0 text-[24px] text-white w-full">Un abbonamento, centinaia di palestre. Scopri i migliori centri fitness di Torino con un solo piano.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Text">
      <Heading />
      <Paragraph />
    </div>
  );
}

function ImageFitnessTraining() {
  return (
    <div className="h-[765px] relative rounded-[24px] shrink-0 w-[592px]" data-name="Image (Fitness Training)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[116.06%] left-[-0.08%] max-w-none top-[-8.04%] w-full" src={imgImageFitnessTraining.src} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_16.67%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5.88%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3962 16.2512">
          <g id="Group">
            <path d={svgPaths.p2c7ea100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71064" />
            <path d={svgPaths.p100d5bbe} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71064" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#b6ff3b] relative rounded-[28699720px] shrink-0 size-[30.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[20.528px]" data-name="tabler:yoga">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[17.106px] items-start relative shrink-0 w-[121.99px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[17.106px] min-w-px not-italic relative text-[#43474e] text-[11.974px]">Prossima Classe</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41.055px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.949px] not-italic relative shrink-0 text-[#0a0a0a] text-[15.396px] whitespace-nowrap">Yoga • Oggi 18:00</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10.264px] h-[41.055px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3.421px_1.711px_rgba(0,0,0,0.25),0px_17.106px_10.691px_rgba(0,0,0,0.1),0px_6.843px_4.277px_rgba(0,0,0,0.1)] flex flex-col h-[68.426px] items-start pt-[13.685px] px-[13.685px] relative rounded-[13.685px] shrink-0 w-[201.426px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#b6ff3b] relative rounded-[28699720px] shrink-0 size-[30.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[20.528px]" data-name="tabler:bike">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.88%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.817 16.2511">
                <path d={svgPaths.p161c6100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71064" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[17.106px] items-start relative shrink-0 w-[121.99px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[17.106px] min-w-px not-italic relative text-[#43474e] text-[11.974px]">Prossima Classe</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[41.055px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.949px] not-italic relative shrink-0 text-[#0a0a0a] text-[15.396px] whitespace-nowrap">Spinning • Sab 13:00</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[10.264px] h-[41.055px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3.421px_1.711px_rgba(0,0,0,0.25),0px_17.106px_10.691px_rgba(0,0,0,0.1),0px_6.843px_4.277px_rgba(0,0,0,0.1)] flex flex-col h-[68.426px] items-start pt-[13.685px] px-[13.685px] relative rounded-[13.685px] shrink-0 w-[222.426px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#b6ff3b] relative rounded-[40176304px] shrink-0 size-[43.105px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[28.736px]" data-name="tabler:swimming">
          <div className="absolute inset-[33.33%_12.5%_29.16%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-11.11%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9475 13.1715">
                <path d={svgPaths.p19ccae40} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3947" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[23.947px] items-start relative shrink-0 w-[170.772px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[23.947px] min-w-px not-italic relative text-[#43474e] text-[16.763px]">Prossima Classe</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[57.473px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[33.526px] not-italic relative shrink-0 text-[#0a0a0a] text-[21.552px] whitespace-nowrap">Nuoto • Lun 19:30</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[14.368px] h-[57.473px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_23.947px_14.967px_rgba(0,0,0,0.1),0px_9.579px_5.987px_rgba(0,0,0,0.1)] flex flex-col h-[95.788px] items-start pt-[19.158px] px-[19.158px] relative rounded-[19.158px] shrink-0 w-[282.788px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6014 15.6014">
          <g id="Group">
            <path d={svgPaths.p30a924c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56012" />
            <path d={svgPaths.p12d00980} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56012" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#b6ff3b] relative rounded-[26174418px] shrink-0 size-[28.082px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[18.721px]" data-name="tabler:cliff-jumping">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[15.601px] items-start relative shrink-0 w-[111.256px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15.601px] min-w-px not-italic relative text-[#43474e] text-[10.921px]">Prossima Classe</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[37.443px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container19 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21.842px] not-italic relative shrink-0 text-[#0a0a0a] text-[14.041px] whitespace-nowrap">Arrampicata • Mar 08:00</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[9.361px] h-[37.443px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_15.601px_9.751px_rgba(0,0,0,0.1),0px_6.24px_3.9px_rgba(0,0,0,0.1)] flex flex-col h-[62.405px] items-start pt-[12.481px] px-[12.481px] relative rounded-[12.481px] shrink-0 w-[227.405px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_16.67%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5.89%_-5.56%_-5.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8213 15.6012">
          <g id="Group">
            <path d={svgPaths.p25e29780} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56012" />
            <path d={svgPaths.pbb52368} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56012" />
            <path d={svgPaths.p6c5af80} fill="var(--fill-0, #0A0A0A)" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56012" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#b6ff3b] relative rounded-[26174418px] shrink-0 size-[28.082px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[18.721px]" data-name="tabler:play-football">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[15.601px] items-start relative shrink-0 w-[111.256px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15.601px] min-w-px not-italic relative text-[#43474e] text-[10.921px]">Prossima Classe</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[37.443px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container24 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21.842px] not-italic relative shrink-0 text-[#0a0a0a] text-[14.041px] whitespace-nowrap">Calcio • Mar 08:00</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[9.361px] h-[37.443px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_15.601px_9.751px_rgba(0,0,0,0.1),0px_6.24px_3.9px_rgba(0,0,0,0.1)] flex flex-col h-[62.405px] items-start pt-[12.481px] px-[12.481px] relative rounded-[12.481px] shrink-0 w-[188.405px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Class() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[0.69px] content-stretch flex gap-[8px] h-[95.788px] items-center left-[calc(50%+0.22px)] w-[1166.448px]" data-name="Class">
      <Container />
      <Container5 />
      <Container10 />
      <Container15 />
      <Container20 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex gap-[56px] items-center justify-center py-[56px] relative shrink-0 w-full" data-name="Hero">
      <Text />
      <ImageFitnessTraining />
      <Class />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="min-w-[48px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 size-[20px] top-1/2 z-[3]" data-name="Icon">
            <div className="absolute inset-[11.46%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="icon" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px] z-[2]" data-name="Icon">
            <div className="-translate-x-1/2 absolute aspect-[18/20] bottom-[8.33%] left-1/2 top-[8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
                <path d={svgPaths.p398f0df0} fill="var(--fill-0, #0A0A0A)" id="icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.1px] whitespace-nowrap z-[1]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Prenota una lezione</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-[6px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2 z-[3]" data-name="Icon">
            <div className="absolute inset-[8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="icon" opacity="0" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px] z-[2]" data-name="Icon">
            <div className="absolute inset-[8.33%_16.67%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
                <path d={svgPaths.p154f1f00} fill="var(--fill-0, #374D13)" id="icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374d13] text-[14px] tracking-[0.1px] whitespace-nowrap z-[1]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Offri una prestazione</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[434px]">
      <div className="content-stretch cursor-pointer flex gap-[2px] h-[48px] items-center overflow-clip relative rounded-[16px] shrink-0" data-name="Connected button group">
        <div className="bg-[#b6ff3b] content-stretch flex flex-col items-center justify-center min-w-[48px] overflow-clip relative rounded-[24px] shrink-0 w-[85px]" data-name="Segment 1">
          <StateLayer1 />
        </div>
        <div className="bg-[#d0eda1] content-stretch flex flex-col items-center justify-center min-w-[48px] overflow-clip relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px] shrink-0 w-[85px]" data-name="End segment">
          <StateLayer2 />
        </div>
      </div>
    </div>
  );
}

function TitleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Title section">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[64px] text-center text-white w-[min-content]">Come funziona</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[#dfe2eb] text-[20px] text-center w-[min-content]">{`Muovento e la piattaforma dove si incontranno le persone che vogliono fare attivita e i prestatori di servizi. `}</p>
      <Frame1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.pfcdd580} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1517b200} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M31.6667 13.3333V23.3333" id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M36.6667 18.3333H26.6667" id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#9ae600] content-stretch flex items-center justify-center px-[12px] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-px not-italic relative text-[20px] text-white">Registrati</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Heading1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#d8e2ff] text-[16px] w-[243px]">Crea il tuo account in pochi minuti e scegli il piano più adatto alle tue esigenze.</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[184px] not-italic opacity-25 text-[#d8e2ff] text-[60px] top-[-11.48px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#1e2939] h-full relative rounded-[24px] shrink-0 w-[291px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3d885880} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p108df500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2f46cda0} id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#9ae600] content-stretch flex items-center justify-center px-[12px] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[56px] items-start relative shrink-0 w-[243px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[243px]">Carica il tuo certificato medico</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Heading2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#d8e2ff] text-[16px] w-[243px] whitespace-pre-wrap">{`Carica il tuo certificato valido  o prenota per farlo.`}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[175px] not-italic opacity-25 text-[#d8e2ff] text-[60px] top-[-11.48px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#1e2939] h-full relative rounded-[24px] shrink-0 w-[291px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M13.3333 3.33333V10" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 3.33333V10" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p36a93880} id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M5 16.6667H35" id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#9ae600] content-stretch flex items-center justify-center px-[12px] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[243px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[243px]">Prenota le Classi</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Heading3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#d8e2ff] text-[16px] w-[243px]">{`Esplora i centri convenzionati e prenota le tue attività direttamente dall'app.`}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[174px] not-italic opacity-25 text-[#d8e2ff] text-[60px] top-[-11.48px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#1e2939] h-full relative rounded-[24px] shrink-0 w-[291px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M24 24L16 16" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3927dd00} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M35.8333 35.8333L33.5 33.5" id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M6.5 6.5L4.16667 4.16667" id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3d354080} id="Vector_5" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#9ae600] content-stretch flex items-center justify-center px-[12px] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[243px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[243px]">Inizia ad Allenarti</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Heading4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#d8e2ff] text-[16px] w-[243px]">Presenta il tuo QR code al centro e goditi il tuo allenamento.</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[173px] not-italic opacity-25 text-[#d8e2ff] text-[60px] top-[-11.48px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#1e2939] h-full relative rounded-[24px] shrink-0 w-[291px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[24px] h-[252px] items-center justify-center relative shrink-0" data-name="Cards">
      <div className="flex flex-row items-center self-stretch">
        <Container25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container31 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container34 />
      </div>
    </div>
  );
}

function How() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip p-[96px] relative shrink-0 w-[1512px]" data-name="How">
      <TitleSection />
      <Cards />
    </div>
  );
}

function Apple() {
  return (
    <div className="absolute h-[24px] left-[8px] top-[8px] w-[20px]" data-name="Apple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Apple">
          <path d={svgPaths.p39414c00} fill="var(--fill-0, white)" id="<Path>" />
          <path d={svgPaths.p279a94f0} fill="var(--fill-0, white)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start left-[36px] not-italic text-white top-1/2 w-[78px]" data-name="Content">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[9px] relative shrink-0 text-[9px] w-full">Download on the</p>
      <p className="font-['SF_Compact_Display:Medium',sans-serif] leading-none relative shrink-0 text-[18px] tracking-[-0.47px] w-full">App Store</p>
    </div>
  );
}

function Playstore() {
  return (
    <div className="absolute h-[24px] left-[8px] top-[8px] w-[21px]" data-name="Playstore">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Playstore">
          <path d={svgPaths.p3e6f9e80} fill="var(--fill-0, #EA4335)" id="path94" />
          <path d={svgPaths.p8018300} fill="var(--fill-0, #FBBC04)" id="path98" />
          <path d={svgPaths.p17386100} fill="var(--fill-0, #4285F4)" id="path102" />
          <path d={svgPaths.p25fa7f00} fill="var(--fill-0, #34A853)" id="path106" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[36px] top-[5px]" data-name="Content">
      <p className="[word-break:break-word] font-['Product_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-white uppercase w-[min-content]">GET IT ON</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[15px] relative w-[74px]" data-name="path90">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 15">
              <path d={svgPaths.p3d8e9c00} fill="var(--fill-0, white)" id="path90" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Buttons">
      <div className="bg-black h-[40px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Component 2">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Apple />
          <Content1 />
        </div>
        <div aria-hidden className="absolute border border-[#a6a6a6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-black h-[40px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Component 3">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Playstore />
          <Content2 />
        </div>
        <div aria-hidden className="absolute border border-[#a6a6a6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 w-full" data-name="Download">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center pb-[32px] pt-[16px] px-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#b6ff3b] text-[36px] text-center uppercase w-[min-content]">Scarica l’APP</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[#dfe2eb] text-[20px] text-center w-[min-content]">e comincia subito il tuo percorso</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="MacBook Pro 14' - 1">
      <Header />
      <Hero />
      <How />
      <Download />
    </div>
  );
}
