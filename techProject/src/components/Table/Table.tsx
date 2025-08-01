import MainButton from "../Buttons/MainButton/MainButton";
import Row from "./components/Row/Row";
import SearchComp from "./components/SearchComp/SearchComp";
import "./Table.css";

export default function Table() {
    return (
        <div className="table-container">
            <header className="table-header">
                <h1 className="table-header-title">Templates</h1>
            </header>

            <section className="table-section">
                <div className="table-section-header">
                    <SearchComp />
                    <MainButton>Add New</MainButton>
                </div>
                <table className="table-content">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row
                            name={"Simple Test"}
                            date={new Date("30-/12/2024")}
                        />
                    </tbody>
                </table>
                <div className="table-footer">Example</div>
            </section>
        </div>
    );
}
