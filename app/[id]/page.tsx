interface props {
  params: {
    id: string;
  };
}
function page({ params }: props) {
  return <div> {params.id} </div>;
}

export default page;
