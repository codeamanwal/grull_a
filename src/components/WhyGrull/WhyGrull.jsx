import React from 'react';
import Features from './Features';
import {earnMore, efficientEscrow, fairJudgment, transparency} from '../Assets';
// eslint-disable-next-line camelcase
import isolationmode from '../Assets/Images/isolationmode.svg';

const WhyGrull = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-purple-400 py-4">
        <div
          className="flex justify-center sm:w-1/3 w-3/5 py-4 rounded-lg sm:my-8 my-3"
          style={{
            background: 'linear-gradient(269.98deg, #4301A3 45.02%, rgba(255, 255, 255, 0) 132.92%)',
          }}>
          <p className="font-semibold sm:text-3xl sm:leading-6 text-white font-spaceGrotesk">Features</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Features
            // eslint-disable-next-line camelcase
            logo={isolationmode}
            title="Optimal Matches"
            subtitle="Perfect pairings for projects."
          />

          <Features logo={isolationmode} title="Project Management" subtitle="Smooth execution and management." />

          <Features logo={isolationmode} title="Upskilling" subtitle="Skill enhancement for freelancers." />

          <Features
            logo={isolationmode}
            title="Community"
            subtitle="Knowledge exchange and collaboration network.."
          />
        </div>
      </section>
      <section className="flex flex-col items-center bg-purple-400 py-4">
        <div
          className="flex justify-center sm:w-1/3 w-3/5 py-4 rounded-lg sm:my-8 my-3"
          style={{
            background: 'linear-gradient(269.98deg, #4301A3 45.02%, rgba(255, 255, 255, 0) 132.92%)',
          }}>
          <p className="font-semibold sm:text-3xl sm:leading-6 text-white font-spaceGrotesk">WHY GRULL</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Features
            logo={earnMore}
            title="EARN MORE"
            subtitle="GRULL reduces commission charges to 2.5%. Use platform&rsquo;s native GRMP cryptocurrency for any transactions to save on your commission to earn more."
          />

          <Features logo={efficientEscrow} title="EFFICIENT ESCROW" subtitle="Efficient escrow for efficient transactions so you don&#39;t have to wait for long periods for your own earnings." />

          <Features logo={transparency} title="TRANSPARENCY" subtitle="No more distrust between buyer and seller. With the power of smart contracts, one is bound to maintain honesty." />

          <Features
            logo={fairJudgment}
            title="FAIR JUDGEMENT"
            subtitle="Unbiased dispute-solving mechanism with the power of decentralized court where people are incentivized to make fair judgment."
          />
        </div>
      </section>
    </>
  );
};

export default WhyGrull;
