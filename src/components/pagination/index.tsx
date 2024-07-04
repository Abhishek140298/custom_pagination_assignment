import React from "react";
import '../../App.css'
interface page {
  pageNumber: number[];
  setPageNumber: any;
  setCurrentPageNumber: any;
  current: number;
}

const Pagination: React.FC<page> = ({
  pageNumber,
  setPageNumber,
  current,
  setCurrentPageNumber,
}) => {
  const [clickedReduce, setClickReduce] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (current >= 4 && clickedReduce) {
      console.log("page Number", current);
      setPageNumber(pageNumber.slice(0, current));
      setClickReduce(false);
    } else if (current < 4 && clickedReduce) {
      if (pageNumber.length > 4) {
        setPageNumber(pageNumber.slice(0, 4));
        setClickReduce(false);
      }
    }
  }, [current]);

  const handlePageClick = (page: number) => {
    setCurrentPageNumber(page);
    setClickReduce(true);
  };

  const handlePreviousClick = () => {
    if (current > 1) {
      setCurrentPageNumber(current - 1);
      setClickReduce(true);
    }
  };

  const handleNextClick = () => {
    if (current >= 4) {
      setPageNumber([...pageNumber, current + 1]);
    }
    setCurrentPageNumber(current + 1);
  };

  return (
    <div className="pagination-page">
      <span className="previous" onClick={handlePreviousClick}>Previous</span>
      {pageNumber?.map((page: number, index: number) => (
        <span  className={current-1==index?"numberSelected":"number"} onClick={() => handlePageClick(page)}>{page}</span>
      ))}
      <span className="next" onClick={handleNextClick}>Next</span>
    </div>
  );
};

export default Pagination;
