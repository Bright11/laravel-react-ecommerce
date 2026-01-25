import { router, usePage } from "@inertiajs/react";

const Pagination = ({ links }: { links: any[] }) => {
    const {url}=usePage()
  return (
    <div className="flex gap-2 mt-4">
      {links.map((link, index) => (
        <button
          key={index}
          disabled={!link.url}

          onClick={() => router.get(link.url)}
          dangerouslySetInnerHTML={{ __html: link.label }}
          className={`px-3 py-1 border rounded ${
            link.active ? "bg-black text-white" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
};

export default Pagination;
