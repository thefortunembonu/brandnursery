import PortfolioComponent from "./portfolioComponent";


interface PortfolioContainerProps {
    items: {
        title: string;
        img: string;
        link?: string;
        description: string;
        tags: string[];
    }[]
}

export default function PortfolioContainer  ({items}: PortfolioContainerProps) {
  return (              


        <div className='flex gap-6 flex-wrap '>
 {
            items.map((item, idx)=> {
                return <div key={idx} className="my-2 mx-4">
        <PortfolioComponent
         title={item.title}
         link={item.link}
         description={item.description}
          tags={item.tags} 
          img={item.img}/>
                </div>
        }
    )}
        </div>
       

 
  )
}