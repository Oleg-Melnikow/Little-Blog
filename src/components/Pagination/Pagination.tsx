import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';

type PaginationPropType = {
    currentPage: number,
    totalPages: number,
    isDisabled: boolean,
    nextPage: (page: number) => void,
}

export function PaginationRounded(props: PaginationPropType) {

    const [page, setPage] = useState<number>(props.currentPage);

    const handleChangePage = (e: any, page: number) => {
        setPage(page);
        props.nextPage(page);
    }

    return (
            <Pagination page={page} count={props.totalPages} disabled={props.isDisabled} onChange={handleChangePage}
                        variant="outlined" shape="rounded" showFirstButton showLastButton/>
    );
}
