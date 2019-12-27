import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage = data => {
    var page = data;
    console.log("data.selected", data.selected);
    if (data.selected || data.selected == 0) {
      page = data.selected + 1;
    }

    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page, pageSize);

    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager: pager });

    this.props.onChangePage(pageOfItems);
  };

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    pageSize = pageSize || 6;

    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage = 1,
      endPage = totalPages;

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = [...Array(totalPages).keys()].map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pager.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.setPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default Pagination;
