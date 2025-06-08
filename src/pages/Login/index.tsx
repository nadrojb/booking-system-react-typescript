function Login() {

    return (
        <>
            <section>
                <div>
                    <form className="w-10/12 mx-auto">
                        <div>
                            <h2 className="text-xl font-medium">Contact</h2>
                            <input
                                required
                                className={`w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm}`}
                                type="text"
                            />
                            <label
                                className="relative -top-12 left-2 text-sm text-gray-500"
                            >
                                Email
                            </label>
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Login