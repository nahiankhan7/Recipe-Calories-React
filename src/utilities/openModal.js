const modal = () => {
  const modal = document.getElementById("modal");
  if (modal) {
    // Remove hidden class and set up visible classes
    modal.classList.remove("hidden");
    modal.classList.remove("opacity-0", "translate-y-[-20px]");
    modal.classList.add("opacity-100", "translate-y-0"); // Animate in

    // Set a timeout to close the modal after 5 seconds
    setTimeout(() => {
      modal.classList.remove("opacity-100", "translate-y-0"); // Animate out
      modal.classList.add("opacity-0", "translate-y-[-20px]");

      // Hide after the animation completes
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300); // Match the duration with your CSS transition
    }, 2000);
  }
};

export { modal };
