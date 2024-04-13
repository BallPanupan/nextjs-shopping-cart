import Link from "next/link";

const Pagination = ({ total }: { total: number }) => {
  const pages = Math.ceil(total / 30);

  return (
    <div className='pagination'>
      Page:
      <div className='page-number'>
        {Array.from({ length: pages }, (_, index) => index + 1).map((page) => (
          <Link key={page} href={`?page=${page}`}>
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
