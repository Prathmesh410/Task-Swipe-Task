import {HiOutlineViewfinderCircle} from "react-icons/hi2"
import {FiEdit} from "react-icons/fi"
import {RiDeleteBin7Line} from "react-icons/ri"

export default function Invoice({ val, view, edit, remove }) {
    return (
        <div className="invoice shadow-lg d-flex" >
           <div className="col invoice-text">
           <div className="row ">
                <div className="col d-flex ">Invoice No: {val.invoiceNumber}</div>
                <div  className="col d-flex ">Date: {val.dateOfIssue}</div>
            </div>
            <div>From : {val.billFrom}</div>
            <div>To:  {val.billTo} </div>
           </div>
            <div className="row d-flex invoice-btn-container">
            <HiOutlineViewfinderCircle onClick={view} className = "invoice-btn fs-4" />
            <FiEdit onClick={edit}  className = "invoice-btn fs-5"/>
            <RiDeleteBin7Line onClick={remove}  className = "invoice-btn fs-4"/>
            </div>
        </div>
    )
} 

