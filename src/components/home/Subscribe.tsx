import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Subscribe() {
  return (
    <div className="container my-20">
      <div className="relative rounded-lg overflow-hidden min-h-[300px] w-full bg-[#3f4145] flex flex-col items-center justify-center px-4 ">
        {/* Decorative shapes */}
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-teal-600 rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute right-0 top-0 w-32 h-32 bg-teal-600 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2" />

        <h2 className="text-white text-3xl mb-10 font-semibold text-center  max-w-[647px]">
          Subscribe to our Newsletter for Newest Course Updates
        </h2>

        <div className="flex flex-col max-w-[647px] sm:flex-row gap-4">
          <Button asChild variant="secondary" className="flex w-[364px] py-4 justify-center items-center">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="secondary" className="flex w-[364px] py-4 justify-center items-center">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
