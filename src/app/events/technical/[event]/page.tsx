const page = async({params}:any) => {
  console.log((await params).event)
  
  return (
    <div className="mt-[125px] min-h-screen relative">
      
    </div>
  )
}

export default page