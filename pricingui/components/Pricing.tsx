import CheckIcon from "@/icons/icons"


export default function Pricing() {
  return (
    <div className="flex justify-center mt-[-256px] w-[994px] m-auto overflow-hidden rounded-xl border-2 shadow-xl ">
      <section className=" p-16 text-center bg-gray-100">
        <p className="text-2xl font-extrabold">Premium PRO</p>
        <h3 className="text-6xl mt-4 font-[700] ">$329</h3>
        <p className="color-171923 mt-2 text-lg font-medium">Billed Just Once</p>
        <button className="mt-6 w-72 rounded-md bg-violet-600 text-white py-3 text-lg font-medium">Get Started</button>
      </section>
      <section className=" p-16 bg-white ">
        <p className="text-xl  ">Access these features when you get this pricing package for your business.</p>
        <ul className=" text-xl ">
          <li className="pt-4 flex"><svg className="w-22 h-6 pr-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z" fill="#652CD3" /></svg><p>International calling and messaging API</p></li>
          <li className="pt-4 flex"><svg className="w-22 h-6 pr-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z" fill="#652CD3" /></svg><p>Additional phone numbers</p></li>
          <li className="pt-4 flex"><svg className="w-22 h-6 pr-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z" fill="#652CD3" /></svg><p>Automated messages via Zapier</p></li>
          <li className="pt-4 flex"><svg className="w-22 h-6 pr-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM6.2 10.0857L5 11.3714L9 16L17 8.28571L15.8 7L9 12.4L6.2 10.0857Z" fill="#652CD3" /></svg><p>24/7 support and consulting</p></li>
        </ul>
      </section>
    </div>
  )
}