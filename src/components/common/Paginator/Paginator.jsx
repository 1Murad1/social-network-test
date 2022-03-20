import React, {useEffect, useState} from "react";
import arrow from "../../../assets/images/arrow-right-removebg.png"
import classes from "./paginator.module.css";


const Paginator = ({totalCount, currentPage, onCurrentPage, pageSize, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let [portionNumber, setPortionNumber] = useState(1);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={classes.pagination}>
            {portionNumber > 1 && <button className={classes.arrowLeft} onClick={() => {setPortionNumber(portionNumber - 1)}}><img src={arrow} alt="arrow left" /></button>}
            {
                pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <span key={page} onClick={(e) => onCurrentPage(page)}
                                     className={currentPage === page ? classes.selectedPage : null}>{page}</span>
                    })
            }
            {portionCount > portionNumber  && <button className={classes.arrowRight} onClick={() => {setPortionNumber(portionNumber + 1)}}> <img src={arrow} alt="arrow-right" /> </button>}
        </div>
    )
}

export default Paginator;