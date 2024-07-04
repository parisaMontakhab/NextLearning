
export default function MarketingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
      
        <Header/>
        {children}
        <Footer/>
        
      </section>
    )
  }



  function Header(){
    return(
      <div>
        <h1 className="w-96 bg-pink-400 text-white rounded-2xl text-center m-auto p-8 mt-8 mb-8"> HEADER</h1>
      </div>
    )
  }
  
  function Footer(){
    return(
      <div>
        <h1 className="w-96 bg-blue-200 text-white rounded-2xl text-center m-auto p-8 mt-8"> FOOTER</h1>
      </div>
    )
  }