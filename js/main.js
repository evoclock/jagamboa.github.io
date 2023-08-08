// Main Function
document.addEventListener("DOMContentLoaded", function() {
  // Populate content on page load
  document.getElementById('injected').innerHTML = about() + skills() + links() + contact() + cv();
});

function about() {
  // Return about content
  return "<p>I am a computational biologist by training with expertise in a wide range of tools and languages such as R, Python, and GNU Bash, as well as statistical and machine learning methods such as XGBoost and HDBSCAN. What truly motivates me is thinking deeply about the underlying processes that generate any dataset I work with.  I believe in the power of interdisciplinary knowledge, as it allows me to approach challenges from different perspectives and find innovative solutions.</p>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Programming skills:</span></h2><table>\
  <tr>\
    <td>R/RStudio/Tidyverse</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>GNU Bash (inc. awk/sed/grep/regex)</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>SQL (MySQL primarily)</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Git/GitHub/Version control</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  <tr>\
    <td>Perl</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Julia</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  </tr></table>";
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

