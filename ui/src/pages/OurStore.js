import {useState} from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import {TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt} from "react-icons/tfi";
import {ImMenu} from "react-icons/im";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    const gridSetter = (i) => {
        setGrid(i)
    }
    return (
        <>
            <Meta title={"Our Store"}/>
            <BreadCrumb title={"Our Store"}/>
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckChecked"/>
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Our Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title mt-3">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="from-price"
                                                   placeholder="From"/>
                                            <label htmlFor="from-price">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="to-price"
                                                   placeholder="To"/>
                                            <label htmlFor="to-price">To</label>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="sub-title">
                                    <div>
                                        <ul className="colors ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </h5>
                                <h5 className="sub-title">Availablity</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="size-m"/>
                                        <label className="form-check-label" htmlFor="size-m">
                                            M (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="size-l"/>
                                        <label className="form-check-label" htmlFor="size-l">
                                            L (0)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex  flex-wrap align-items-center gap-10">
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphones
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Phones
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Oppo
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Vivo
                                        </span>
                                        <span className="tag bg-light text-secondary rounded-3 py-2 px-3">
                                            Tabled
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Random Product
                                </h3>
                                <div>
                                    <div className="random-products d-flex mb-3">
                                        <div className="w-50">
                                            <img className="img-fluid" src={require('assets/images/Smart Watch.png')}
                                                 alt="Watch"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk pack multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img className="img-fluid" src={require('assets/images/Smart Watch.png')}
                                                 alt="Watch"/>
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk pack multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 sort-by-p">Sort By:</p>
                                        <select name="" className="form-control form-select" id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best selling</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, new to old</option>
                                            <option value="created-descending">Date, old to new</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0">21 Products</p>
                                        <div className="d-flex align-items-center gap-10 grid">
                                            <TfiLayoutGrid4Alt onClick={() => {
                                                gridSetter(3)
                                            }}/>
                                            <TfiLayoutGrid3Alt onClick={() => {
                                                gridSetter(4)
                                            }}/>
                                            <TfiLayoutGrid2Alt onClick={() => {
                                                gridSetter(6)
                                            }}/>
                                            <ImMenu onClick={() => {
                                                gridSetter(12)
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap product-list pb-5 mt-3">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
