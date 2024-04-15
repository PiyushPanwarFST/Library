import bookModel from "../models/bookModel.mjs";

const addBook = async(req, res) => {
    try{
    const data = req.body;
    const createBook = await bookModel.create(data);
    return res.status(201).send({Success: "Status 201 Book added successfully", book: createBook});
    }
    catch (err){
        console.log(err);
    }
}

const searchBook = async(req, res) => {
    try{
        const searchBook = await bookModel.find({title: "Ikigai"});
        return res.status(200).send({Success: "Status 200 Array of books matching the search criteria", book: searchBook});
    }
    catch (err){
        console.log(err);
    }
}

export {addBook, searchBook};
