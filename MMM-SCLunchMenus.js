Module.register("MMM-SCLunchMenus", {
  // 8/5, 8/19, 9/2, 9/16, 9/30,10/14, 10/28, 11/11, 11/25, 12/9, 12/23, 1/6, 1/20, 2/3,
  // 2/17, 3/3, 3/17, 3/31, 4/14, 4/28, 5/12, 5/26
  defaults: {
    weeks: [
      [
        "",
        "Mini Corndogs, Cheeze Pizza, Sweet Potato Lattice Fresh Broccoli w/Ranch",
        "Chicken Taco, Chicken Fajita, Mango Wango Juice, Sweet Buttered Corn, Nacho Chips or Flour Tortilla",
        "Popcorn Chicken, Pulled Pork BBQ, Baked Potatoes, Baked Beans, Macaroni & Cheese",
        "Salisbury Steak & Gravy, Chicken Drumstick, Green Beans, Mashed Potatoes, Ma's Rolls",
        "Cheeseburger, Turkey Frank, Crinkle Cut Fries, Steamed Carrots",
        "",
      ],
      [
        "",
        "Crispy Chicken Tenders, Breaded Beef Fingers, Mashed Potatoes, Pinto Beans, Garlic Bread Stick",
        "Rotini & Italian Meat Sauce, Breaded Chicken Thigh, Shaker Salads, Steamed Broccoli, Garlic Bread Stick",
        "Popcorn Chicken, Cheeseburger Mac, Pulled Pork Nachos, Scalloped Potatoes, Steamed Peas & Carrots, Ma's Roll",
        "Sausage, Egg & Cheese Biscuit, Big Chicken Biscuit, Tator Bucks, Dragon Juice, Baked Apples",
        "Pepperoni Pizza, Grilled Cheese, Steamed Peas, Fresh Carrots w/Ranch, Garlic Bread Stick",
        "",
      ],
    ],
  },

  getStyles () {
    return ["template.css"];
  },

  getScripts () {
	  return ["moment.js"];
  },

  getTemplate () {
    return "template.njk";
  },

  getTemplateData () {
    let now      = moment(),
        weekNum  = now.format('w'),
        week     = weekNum % 2,
        today    = parseInt(now.format('d')),
        tomorrow = today === 6 ? 0 : today + 1,
        days = this.config.weeks[week];

    console.log("today: ", today, "tomorrow: ", tomorrow);
	  return {
      menuToday: days[today],
      menuTomorrow: days[tomorrow],
    };
  }
});
