// Main Function
document.addEventListener("DOMContentLoaded", function() {
  // Populate content on page load
  document.getElementById('injected').innerHTML = about() + skills() + links() + contact() + cv();
});

function about() {
  // Return about content
  return "<p>I am a computational biologist by training with expertise in a wide range of tools and languages such as R, Python, and GNU Bash, as well as statistical and machine learning methods such as XGBoost and HDBSCAN. What truly motivates me is thinking deeply about the underlying processes that generate any dataset I work with.  I believe in the power of interdisciplinary knowledge, as it allows me to approach challenges from different perspectives and find innovative solutions.</p>";
}

function skills() {
  // Return skills content
  return "<h2>Programming skills:</h2><ul>\
    <li>R/RStudio/Tidyverse - 90%</li>\
    <li>Python - 60%</li>\
    <li>GNU Bash (inc. awk/sed/grep/regex) - 80%</li>\
    <li>SQL (MySQL primarily) - 80%</li>\
    <li>Git/GitHub/Version control - 70%</li>\
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

