'use client';
import clsx from 'clsx';
import styles from './experience.module.scss';
import GitNode from './components/GitNode';
import { Experience, experiencesList } from '@/data/experience-lib';
import Branch from './components/Branch';
import { useEffect, useRef, useState } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import Image from 'next/image';
import { SkillTag, allSkillList } from '@/data/skill-lib';
import FlippedImage from '@/components/FlippedImage';

const ExperiencePage = () => {
    const scrollRef = useRef<any>(null);
    const [scrollStarted, setScrollStarted] = useState(false);
    const [animCancelled, setAnimCancelled] = useState(false);

    useHorizontalScroll(scrollRef);

    useEffect(() => {
        if (!scrollRef.current || window.innerWidth < 768) return;

        let active = true;
        let anim: any;
        const keyDownHandler = (e: any) => {
            if (e.code == 'Space' && scrollRef.current) {
                active = false;
                cancelAnimationFrame(anim);
                setAnimCancelled(true);
                setScrollStarted(true);
                document.removeEventListener('keydown', keyDownHandler);
            }
            setTimeout(
                () =>
                    (scrollRef.current.scrollLeft =
                        scrollRef.current.scrollWidth),
                10
            );
        };

        const scrollToEnd = () => {
            const element = scrollRef.current;
            const delay = 1000;
            const duration = 30000; // Duration of scrolling animation in milliseconds
            const start = element.scrollLeft;
            const target = element.scrollWidth - element.clientWidth;
            const distance = target - start;
            const startTime = performance.now() + delay;
            const easeInOutQuad = (t: any) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };

            const scrollAnimation = (currentTime: any) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                element.scrollLeft = start + distance * easeInOutQuad(progress);

                if (progress < 1 && active) {
                    requestAnimationFrame(scrollAnimation);
                }
            };

            anim = scrollAnimation;

            setTimeout(() => {
                setScrollStarted(true);
                if (active) requestAnimationFrame(anim);
            }, delay);

            document.addEventListener('keydown', keyDownHandler);
        };

        scrollToEnd();

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    const formatDate = (date: Date | null): string => {
        if (!date) return 'Present';
        const months: string[] = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];

        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${year}`;
    };

    const getSkillName = (tag: SkillTag) =>
        allSkillList.find((skill) => skill.icon_url === tag)?.name ?? tag;

    const sortedExperiences: Experience[] = [...experiencesList].sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );

    const topRow = [];
    const bottomRow = [];

    for (let i = 0; i < experiencesList.length; i++) {
        if (experiencesList.length % 2) {
            if (i % 2) bottomRow.push(experiencesList[i]);
            else topRow.push(experiencesList[i]);
        } else {
            if (i % 2) topRow.push(experiencesList[i]);
            else bottomRow.push(experiencesList[i]);
        }
    }

    return (
        <>
            <div className="hidden md:block">
                <div
                    className={clsx(
                        styles.experienceScroller,
                        scrollStarted
                            ? 'overflow-x-scroll'
                            : 'overflow-x-hidden',
                        'ml-[5vw] h-screen w-[calc(100%-5vw)] overflow-y-hidden'
                    )}
                    ref={scrollRef}
                >
                    <div
                        className={clsx(
                            styles.experienceWrapper,
                            !scrollStarted && 'overflow-x-hidden',
                            'relative h-screen w-max overflow-y-hidden px-20'
                        )}
                    >
                        {/* Beginning */}
                        <div className="absolute left-20 top-[calc(50%-2rem)] flex items-center">
                            <GitNode relative />
                            <div
                                className={clsx(
                                    styles.branch,
                                    styles.bgGradient,
                                    'relative w-72'
                                )}
                            ></div>
                            <p
                                className={clsx(
                                    animCancelled && 'hidden',
                                    styles.cancelAnimText,
                                    'absolute left-0 top-12 pl-20 text-sm text-light transition'
                                )}
                            >
                                Press space to skip animation
                            </p>
                        </div>
                        <div
                            className={`${experiencesList.length % 2 ? 'ml-80' : 'ml-[80em]'} flex h-1/2 flex-nowrap`}
                        >
                            {topRow.map((experience, i) => {
                                return (
                                    <Branch
                                        experience={experience}
                                        key={
                                            experience.name +
                                            experience.startDate
                                        }
                                        top={true}
                                        i={2 * i}
                                        final={
                                            experience ==
                                            experiencesList[
                                                experiencesList.length - 1
                                            ]
                                        }
                                        cancelled={animCancelled}
                                    />
                                );
                            })}
                        </div>
                        <div
                            className={`${experiencesList.length % 2 ? 'ml-[80em]' : 'ml-80'} flex h-1/2 flex-nowrap`}
                        >
                            {bottomRow.map((experience, i) => {
                                return (
                                    <Branch
                                        experience={experience}
                                        key={
                                            experience.name +
                                            experience.startDate
                                        }
                                        top={false}
                                        i={2 * i + 1}
                                        final={
                                            experience ==
                                            experiencesList[
                                                experiencesList.length - 1
                                            ]
                                        }
                                        cancelled={animCancelled}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.cover}></div>
                </div>
            </div>

            <div className={clsx('relative block px-6 pb-16 pt-32 md:hidden')}>
                <h2 className="textGradient mb-8 text-center text-3xl font-semibold tracking-wide">
                    Experience
                </h2>
                <div
                    className="pointer-events-none absolute left-6 w-[3px] bg-gb-3 opacity-90"
                    style={{
                        top: '13rem',
                        height: 'calc(100% - 18rem)',
                    }}
                ></div>
                <ul className="relative m-0 list-none p-0">
                    {sortedExperiences.map((experience, idx) => {
                        const dateString = `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`;
                        const typeString = `${experience.type} • ${experience.location}`;

                        return (
                            <li
                                key={experience.name + experience.startDate}
                                className="relative mb-10 pl-12 opacity-0"
                                style={{
                                    animation: 'fadeInLeft 0.4s ease forwards',
                                    animationDelay: `${idx * 120}ms`,
                                }}
                            >
                                <a
                                    className={clsx(
                                        'relative block pl-2 text-light no-underline',
                                        !experience.link &&
                                            'pointer-events-none'
                                    )}
                                    href={experience.link ?? undefined}
                                    target={
                                        experience.link ? '_blank' : undefined
                                    }
                                    rel={
                                        experience.link
                                            ? 'noreferrer'
                                            : undefined
                                    }
                                >
                                    <div className="absolute -left-[2.95rem] top-2 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-gb-3"></div>
                                    <div className="mb-2 flex items-center gap-3">
                                        <div
                                            className={clsx(
                                                'relative h-10 w-10 flex-shrink-0',
                                                experience.customLogoWidth
                                            )}
                                        >
                                            <Image
                                                src={experience.logo_url}
                                                fill
                                                alt={`${experience.name} logo`}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="text-lg font-semibold text-light">
                                            {experience.name}
                                        </div>
                                    </div>
                                    <div className="ml-1">
                                        <p className="m-0 text-base font-medium text-light/90">
                                            {experience.role}
                                        </p>
                                        <p className="m-0 mt-1 text-xs text-light/60">
                                            {dateString}
                                        </p>
                                        <p className="m-0 text-xs text-light/60">
                                            {typeString}
                                        </p>
                                        <ul className="mt-2 list-none space-y-1 pl-0 text-sm text-light/80">
                                            {experience.points.map(
                                                (point, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex"
                                                    >
                                                        <span className="mr-2 text-light/50">
                                                            •
                                                        </span>
                                                        <span>
                                                            {point.map(
                                                                (
                                                                    section,
                                                                    k
                                                                ) => (
                                                                    <span
                                                                        key={k}
                                                                    >
                                                                        {
                                                                            section
                                                                        }
                                                                        {k <
                                                                            point.length -
                                                                                1 && (
                                                                            <br />
                                                                        )}
                                                                    </span>
                                                                )
                                                            )}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {experience.skills.map(
                                                (skillTag: SkillTag, j) => {
                                                    const skill =
                                                        allSkillList.find(
                                                            (s) =>
                                                                s.icon_url ===
                                                                skillTag
                                                        );
                                                    if (!skill) return null;
                                                    return (
                                                        <FlippedImage
                                                            key={`${skillTag}-${j}`}
                                                            url={`/skills_icons/color/${skill.icon_url}.svg`}
                                                            alt={`${skill.name} logo`}
                                                            className={clsx(
                                                                'relative h-7 w-7 rounded',
                                                                j !==
                                                                    experience
                                                                        .skills
                                                                        .length -
                                                                        1 &&
                                                                    'mr-1'
                                                            )}
                                                            startDelay={0}
                                                            cancelled={false}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <style jsx global>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default ExperiencePage;
