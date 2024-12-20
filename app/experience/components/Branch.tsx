import clsx from 'clsx';
import styles from '../experience.module.scss';
import { FC } from 'react';
import GitNode from './GitNode';
import { Experience } from '@/data/experience-lib';
import Image from 'next/image';
import ContentBox from './ContentBox';
import Typewriter from '@/components/Typewriter';

const Branch: FC<{
    experience: Experience;
    top: boolean;
    i: number;
    final?: boolean;
    cancelled: boolean;
}> = ({ experience, top, i, final, cancelled }) => {
    return (
        <div
            className={clsx(
                styles.box,
                !final && 'mr-[25rem]',
                'relative box-border h-full py-5'
            )}
        >
            {/* Nodes */}
            <GitNode
                className={clsx(
                    top ? '-bottom-8' : '-top-8',
                    'absolute -left-8'
                )}
            />
            <GitNode
                className={clsx(
                    styles.node,
                    styles.lNode,
                    top ? '-top-8' : '-bottom-8',
                    'absolute'
                )}
            />
            <GitNode
                className={clsx(
                    styles.node,
                    styles.rNode,
                    top ? '-top-8' : '-bottom-8',
                    'absolute'
                )}
            />
            <GitNode
                className={clsx(
                    !final && !experience.endDate && 'hidden',
                    top ? '-bottom-8' : '-top-8',
                    'absolute -right-8'
                )}
            />

            {/* Branches */}
            <div
                className={clsx(
                    styles.clip,
                    top ? styles.lClip : styles.rClip,
                    styles.bgGradient,
                    top ? 'bottom-2' : 'top-2',
                    'absolute left-1'
                )}
            ></div>
            <div
                className={clsx(
                    styles.branch,
                    styles.top,
                    styles.bgGradient,
                    top ? 'top-0' : '-bottom-2',
                    '-mt-[calc(0.625rem)]'
                )}
            ></div>
            <div
                className={clsx(
                    styles.clip,
                    top ? styles.rClip : styles.lClip,
                    styles.bgGradient,
                    !experience.endDate && 'hidden',
                    top ? 'bottom-2 ' : 'top-2',
                    'absolute right-1'
                )}
            ></div>
            <div
                className={clsx(
                    styles.branch,
                    styles.bottom,
                    styles.bgGradient,
                    top ? '-bottom-[0.625rem]' : '-top-[0.625rem]',
                    'left-0 w-[100%]'
                )}
            ></div>

            {/* Content */}
            <a
                className={clsx(
                    !top && 'hidden',
                    !experience.link && 'pointer-events-none',
                    '-mt-24 mb-11 flex w-full px-3'
                )}
                href={experience.link ?? ''}
                target="_blank"
            >
                <div
                    className={clsx(
                        experience.customLogoWidth
                            ? experience.customLogoWidth
                            : 'w-12',
                        'relative mr-4 h-12'
                    )}
                >
                    <Image src={experience.logo_url} fill alt="hi" />
                </div>
                <h3 className="m-0 text-5xl font-medium">
                    <Typewriter
                        text={experience.name}
                        startDelay={2000 + 3000 * i}
                        keyDelay={100}
                        disabled={!top}
                        cancelled={cancelled}
                    />
                </h3>
            </a>
            <ContentBox experience={experience} i={i} cancelled={cancelled} />
            <a
                className={clsx(
                    top && 'hidden',
                    !experience.link && 'pointer-events-none',
                    '-mb-24 mt-11 flex w-full px-3'
                )}
                href={experience.link ?? ''}
                target="_blank"
            >
                <div
                    className={clsx(
                        experience.customLogoWidth
                            ? experience.customLogoWidth
                            : 'w-12',
                        'relative mr-4 h-12'
                    )}
                >
                    <Image src={experience.logo_url} fill alt="hi" />
                </div>
                <h3 className="m-0 text-5xl font-medium">
                    <Typewriter
                        text={experience.name}
                        startDelay={2000 + 3000 * i}
                        keyDelay={100}
                        disabled={top}
                        cancelled={cancelled}
                    />
                </h3>
            </a>
        </div>
    );
};

export default Branch;
