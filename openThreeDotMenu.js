{
  // Selects all elements with the aria-label "Toggle to follow" - 
  // these elements are assumed to be follow/unfollow buttons.
  var follows = document.querySelectorAll('div[aria-label="Toggle to follow"]');

  // Set a delay of 1500 milliseconds (1.5 seconds) between each unfollow action
  var delay = 1500;

  // Initialize a counter to keep track of the current element being unfollowed
  var i = 0;

  // Define the unfollow function, which will perform the unfollow actions sequentially
  function unfollow() {
    // Check if the counter has reached the end of the follows list
    // If so, stop the function to avoid errors.
    if (i == follows.length) {
      return; // Exit the function when all elements have been processed
    }

    // Calculate the remaining time in seconds for completion
    // This is helpful for tracking or displaying progress.
    var remaining = ((follows.length - i) * (delay + 500) / 1000).toFixed(0);

    // Perform the click action on the current follow/unfollow button
    follows[i].click();

    // Move to the next element for the following cycle
    i = i + 1;

    // Set a timeout to call the unfollow function again after a random delay
    // between 500 milliseconds and delay * 2 (to mimic human behavior and avoid detection)
    setTimeout(unfollow, Math.floor(500 + Math.random() * delay * 2));
  }

  // Start the unfollow process by calling the function for the first time
  unfollow();
}
