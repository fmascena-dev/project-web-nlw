import Image from 'next/image';

import gold from '../../assets/medal-gold.svg';
import silver from '../../assets/medal-silver.svg';
import bronze from '../../assets/medal-cooper.svg';

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | André Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1128
          </span>
          <Image
            src={gold}
            alt="Gold Medal"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Melissa Loures
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>
          <Image
            src={silver}
            alt="Silver Medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Felipe Mascena
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            875
          </span>
          <Image
            src={bronze}
            alt="Bronze Medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
}
