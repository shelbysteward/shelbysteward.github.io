const runs = [
  {
    image:"artifact-7-experiment-1-baseline.png?v=2",
    kicker:"EXPERIMENT 01",
    title:"Baseline: Clean Circular Data",
    text:"With two hidden layers and four neurons per layer, the model learned the clean circular decision boundary almost perfectly.",
    epochs:"514", train:"0.001", test:"0.001"
  },
  {
    image:"artifact-7-experiment-2-noise.png?v=2",
    kicker:"EXPERIMENT 02",
    title:"Add Noise: Same Network, Messier Data",
    text:"Increasing noise to 40 introduced overlap between classes. The model still found the general pattern, but uncertainty and loss increased sharply.",
    epochs:"503", train:"0.158", test:"0.225"
  },
  {
    image:"artifact-7-experiment-3-small-network.png?v=2",
    kicker:"EXPERIMENT 03",
    title:"Reduce Capacity: One Layer, Two Neurons",
    text:"The smaller network lacked enough capacity to form the circular nonlinear boundary, causing performance to drop even though the data was clean.",
    epochs:"509", train:"0.203", test:"0.301"
  },
  {
    image:"artifact-7-experiment-4-spiral-small.png?v=2",
    kicker:"EXPERIMENT 04",
    title:"Harder Pattern: Spiral Dataset",
    text:"The same 4 → 4 architecture struggled to represent the intertwined spiral. The decision regions remained too broad for the pattern.",
    epochs:"1,958", train:"0.269", test:"0.395"
  },
  {
    image:"artifact-7-experiment-5-spiral-large.png?v=2",
    kicker:"EXPERIMENT 05",
    title:"Add Capacity: Three Layers, Six Neurons Each",
    text:"A deeper and wider network learned the spiral far more effectively, cutting test loss to 0.059 while visually following the nonlinear curves.",
    epochs:"2,280", train:"0.001", test:"0.059"
  }
];

document.querySelectorAll(".run").forEach(btn => {
  btn.addEventListener("click", () => {
    const i = Number(btn.dataset.run);
    const r = runs[i];
    document.querySelectorAll(".run").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("run-image").src = r.image;
    document.getElementById("run-image").alt = r.title;
    document.getElementById("run-kicker").textContent = r.kicker;
    document.getElementById("run-title").textContent = r.title;
    document.getElementById("run-text").textContent = r.text;
    document.getElementById("run-epochs").textContent = r.epochs;
    document.getElementById("run-train").textContent = r.train;
    document.getElementById("run-test").textContent = r.test;
  });
});
