
function App() {
  return (
    <div className="container">

        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href=".">ReactJS Todo List</a>
        </nav>

        <header className="pt-3 pb-1">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>                <div className="input-group-append">
                    <button className="btn btn-primary  shadow-none" type="button" id="button-addon2">Add task</button>
                </div>
            </div>
        </header>
        <main>
			<form>
				<div className="pb-2 breadcrumb">
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" checked="checked" name="rado" id="rado1" value="1"/>
						<label className="form-check-label" for="rado1">
							Show all tasks
						</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="rado" id="rado2" value="2"/>
						<label class="form-check-label" for="rado2">
							Show completed tasks
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="radio" name="rado" id="rado3" value="3"/>
						<label className="form-check-label" for="rado3">
							Show pending tasks
						</label>
					</div>
				</div>
			</form>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="title">
						Item title
					</span>
                    <span className="float-right">
						<button type="button" className="btn btn-sm btn-outline-primary shadow-none">Task completed</button>
					</span>
                </li>
                <li className="list-group-item">
                    <span>An item</span>
                    <span className="float-right">
						<button type="button" className="btn btn-sm btn-outline-primary shadow-none">Task completed</button>
					</span>
                </li>
                <li className="list-group-item">
                    <span>An item</span>
                    <span className="float-right">
						<button type="button" className="btn btn-sm btn-outline-primary shadow-none">Task completed</button>
					</span>
                </li>
                <li className="list-group-item">
                    <span>An item</span>
                    <span className="float-right">
						<button type="button" className="btn btn-sm btn-outline-primary shadow-none">Task completed</button>
					</span>
                </li>
            </ul>
        </main>
    </div>
  );
}

export default App;
