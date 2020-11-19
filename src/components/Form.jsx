export default function Form() {
  
    const place = [];
  for (let i = 1; i < 6; i += 1) {
    place.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const luggage = [];
  for (let i = 1; i < 6; i += 1) {
    luggage.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const day = [];
  for (let i = 1; i < 32; i += 1) {
    day.push(
      <option value={i * 32} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
        <h1>Post your trip</h1>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="trip">Trip</label>
            <input type="text" name="trip" id="trip" />
            <input type="text" name="trip" />
          </div>
          <div>
            <label for="start">Choose Day :</label>
            <select name="start" id="start">
              {day}
            </select>
            <select name="month" id="month">
                <option value="Hécatombéion">Hécatombéion</option>
                <option value="Metageitnion">Metageitnion</option>
                <option value="Béodromion">Béodromion</option>
                <option value="Pyanepsion">Pyanepsion</option>
                <option value="Maimaiterion">Maimaiterion</option>
                <option value="Poséidéon">Poséidéon</option>
                <option value="Gamelion">Gamelion</option>
                <option value="Anthestérion">Anthestérion</option>
                <option value="Elaphébolion">Elaphébolion</option>
                <option value="Mounikion">Mounikion</option>
                <option value="Thargélion">Thargélion</option>
                <option value="Scirophoron">Scirophoron</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" />
          </div>
          <div>
            <label for="place-select">Place</label>
            <select name="place-select" id="place-select">
              {place}
            </select>
          </div>
          <div>
            <label for="luggage">Luggage</label>
            <select name="luggage" id="luggage">
              {luggage}
            </select>
          </div>
          <div>
            <label htmlFor="chariot">Chariot</label>
            <input type="text" name="chariot" id="chariot" />
          </div>
          <div>
            <label htmlFor="user_photo">User photo</label>
            <input type="text" name="user_photo" id="user_photo" />
          </div>
          <div>
            <label htmlFor="user_chariot">Chariot picture</label>
            <input type="text" name="user_chariot" id="user_chariot" />
          </div>
          <button>Validate</button>
        </form>
      </div>
    </div>
  );
}
