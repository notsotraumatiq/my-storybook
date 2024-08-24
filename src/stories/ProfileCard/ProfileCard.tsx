function ProfileCard() {
  return (
    <div className="w-screen h-screen flex justify-center bg-gray-400">
      <section className="bg-white mt-[200px] w-[340px] max-w-[340px] flex justify-center rounded-md self-stretch">
        <div className="flex flex-col text-center justify-center items-center gap-6 mx-4">
          <img className="rounded-full size-16"></img>
          <div>
            <h2 className="font-semibold text-xl">Sarah Doyle</h2>
            <h3 className="font-light text-sm">
              Front End Engineer @ Microsoft
            </h3>
          </div>
          <p className="font-light">
            I turn coffee into bugs which are fixed by someone else. Certified
            StackOverflow and ChatGPT devloper.
          </p>
          <button className="rounded-md bg-indigo-700 text-white h-12 w-full">
            Contact Me
          </button>
          <div className="flex gap-8 justify-center">
            <i className="ri-twitter-x-line text-indigo-700 font-semibold"></i>
            <i className="ri-instagram-line text-indigo-700 font-semibold"></i>
            <i className="ri-instagram-line text-indigo-700 font-semibold"></i>
            <i className="ri-instagram-line text-indigo-700 font-semibold"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileCard;
