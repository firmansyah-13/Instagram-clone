export function Story(){
    return (
        <>
        
        <section className="flex w-full ">
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        </section>
        </>
    )
}
function StoryItem(){
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-400 rounded-full mx-2 mr-2 my-4 border-2"></div>
            <p className="text-white -mt-3 text-sm">tes</p>
        </div>
        </>
    )
}
