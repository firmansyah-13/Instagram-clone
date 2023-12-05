import { StoryItem } from "./story-section";

function Posting(){
    return (
        <>
        <PostingItem/>
        </>
    )
}
function PostingItem(){
    return (
        <>
        <section className="w-full h-96 mx-4 my-6">
            <header className="flex items-center">
                <div className="h-9 w-9 bg-blue-400 rounded-full border-2 mr-4"></div>
                <h2>dicoding</h2>
                <div className="flex  ">
                    <div className="h-1 w-1 mr-1 bg-blue-50 rounded-full"></div>
                    <div className="h-1 w-1 mr-1 bg-blue-50 rounded-full"></div>
                    <div className="h-1 w-1 bg-blue-50 rounded-full"></div>
                </div>
            </header>
            <div className="w-5/6 h-5/6 bg-blue-600 my-3 "></div>
            <div></div>
            <div></div>
        </section>
        </>
    )
}

export default Posting;