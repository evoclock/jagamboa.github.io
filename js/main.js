// Main Function
document.addEventListener("DOMContentLoaded", function() {
  // Populate content on page load
  document.getElementById('injected').innerHTML = about() + skills() + links() + contact() + cv();
});

function about() {
  // Return about content
  return "<p>I am a data scientist and computational biologist with experience delivering complex analytical solutions across both government operations and academic research. My work combines statistical modelling, machine learning, and domain expertise to build robust, scalable pipelines that support real-world decision-making. I have developed and deployed data science models for fraud detection, financial assurance, forecasting, and network risk analysis using technologies such as Python, R, Databricks, Azure DevOps, MLflow, and NLP frameworks like BERT and GPT-2. In parallel, my doctoral research applies advanced sequence modelling, transformer-based embeddings, and multimodal clustering to explore how biological variation drives functional differences across organisms. What motivates me is understanding the underlying processes that generate the data — and designing models that capture that complexity while remaining actionable. I believe interdisciplinary thinking is critical to solving modern data challenges, as it allows me to approach problems from multiple perspectives and design solutions that balance technical rigour with practical impact.</p>";
}

function skills() {
  // Return skills content
  return "<h2>Programming languages:</h2><ul>\
    <li>R/RStudio/Tidyverse - 90%</li>\
    <li>Python - 90%</li>\
    <li>GNU Bash (inc. awk/sed/grep/regex) - 80%</li>\
    <li>SQL - 80%</li>\
    <li>Perl - 50%</li>\
    <li>Julia - 50%</li>\
  </ul>";
}

function links() {
  // Return links content
  return "<h2>Links:</h2><ul>\
    <li><a href=\"https://www.linkedin.com/in/julio-gamboa/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
    <li><a href=\"https://github.com/evoclock\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/J_Gamboa_CV.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

