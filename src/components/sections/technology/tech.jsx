import { Card } from '../../ui';
import { LightBeamIcon, ShieldIcon } from '../../../assets/icons';

export function TechBenefits() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Optical LiFi Technology?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <LightBeamIcon className="w-12 h-12 text-[#E35325] mb-4" />
          <h3 className="text-xl font-bold mb-2">1,000x More Bandwidth</h3>
          <p className="text-gray-400 text-sm">The light spectrum offers exponentially greater deployment capacity than hyper-congested Radio Frequency channels.</p>
        </Card>
        <Card>
          <ShieldIcon className="w-12 h-12 text-[#E35325] mb-4" />
          <h3 className="text-xl font-bold mb-2">Inherent Physical Security</h3>
          <p className="text-gray-400 text-sm">Light cannot pass through structural walls, restricting dynamic interception capabilities to absolute line-of-sight spaces.</p>
        </Card>
      </div>
    </section>
  );
}