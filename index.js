gsap.from(
            ".main .name-1",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name-2",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);





gsap.from(
            ".main .name-2",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name-2",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".main .tag-1",
            {
                y: "8vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".main .tag-2",
            {
                y: "8vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".main .tag-3",
            {
                y: "8vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-1 p",
            {
                y: "15vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-2 h3",
            {
                y: "8vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 h3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-2 p",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-2 ul li img:nth-child(1)",
            {
                x: "14vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 ul li img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-2 ul li img:nth-child(2)",
            {
                x: "14vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 ul li img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-3 h2",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 h2",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-3 img",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.2, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-3 p",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.7,
                ease: "power1.out",
                stagger: 0.2, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-4 ul li img:nth-child(1)",
            {
                x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.2, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 ul li img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-4 ul li img:nth-child(2)",
            {
                x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.2, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 ul li img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-4 ul li img:nth-child(3)",
            {
                x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.7,
                ease: "power1.out",
                stagger: 0.2, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 ul li img:nth-child(3)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-5 .section-5-content div",
            {
                x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 .section-5-content div",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-6 .phoebe-name-big",
            {
                // x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .phoebe-name-big",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(1) h2",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(1) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(1) h3",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(1) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(1) p",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(1) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(1) img",
            {
                // y: "10vw",
                scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(1) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(2) h2",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(2) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(2) h3",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(2) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(2) p",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(2) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(2) li:nth-child(2) img",
            {
                // y: "10vw",
                scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(2) li:nth-child(2) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-6 ul:nth-child(3) li h2",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 1,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(3) li img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(3) li h3",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(3) li img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(3) li p",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.7,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(3) li img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 ul:nth-child(3) li img",
            {
                // y: "10vw",
                scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul:nth-child(3) li img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-7 .record h3",
            {
                y: "10vw",
                // scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 .record h3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-7 .record p",
            {
                y: "10vw",
                // scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 .record p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-7 .section-7-left li",
            {
                x: "-10vw",
                // scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 .section-7-left li",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-7 .section-7-right img",
            {
                x: "10vw",
                // scale: 0.5,
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 .section-7-right img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);