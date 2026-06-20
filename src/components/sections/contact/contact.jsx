import { Button } from '../../ui';

export function ContactFormBlock() {
  return (
    <form className="space-y-6 bg-[#151D30] p-8 border border-gray-800 rounded-sm" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">First Name</label>
          <input type="text" className="w-full bg-[#0B0F19] border border-gray-800 p-3 text-sm focus:outline-none focus:border-[#E35325]" />
        </div>
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">Last Name</label>
          <input type="text" className="w-full bg-[#0B0F19] border border-gray-800 p-3 text-sm focus:outline-none focus:border-[#E35325]" />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">Message</label>
        <textarea rows={5} className="w-full bg-[#0B0F19] border border-gray-800 p-3 text-sm focus:outline-none focus:border-[#E35325]"></textarea>
      </div>
      <Button type="submit" variant="primary" className="w-full">Submit Inquiry</Button>
    </form>
  );
}