# Adoption

The costs are mostly from adoption agencies totalling to $30 per child

## Cost Reduction Methods

- Scholarships $1k per
- Foster (25% chance of not reuniting with parent)
- Employeer Reimbursement
    - Many big tech give $30k per child (may limit to once)

## Age Calculator

- Average age of death in WA: 78

Expected to live until they are 40:

| Kid Age | My Age | My Age when kid 40 |
| --- | --- | --- |
|  0  | 38 | 78 |
|  5  | 43 | 78 |
|  10 | 48 | 78 |
|  15 | 53 | 78 |

<label for="Age">Age of kid for adoption:</label>

<form>
    <input
      type="text"
      id="age"
      name="age"
      required
      minlength="0"
      maxlength="2"
      size="10" /> 
    <input class="styled" type="button" value="Calculate" />
</form>

<p></p>

Your maximum age to adopt a kid to not die before they are 40:

CURRENTLY NOT WORKING - JS MKDOCS INTEGRATION ISSUES

<script>

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Calculate") {
    button.value = "Recalculate";
    paragraph.textContent = "Calculated!";
  } else {
    button.value = "Recalculate";
    paragraph.textContent = "Recalculated!";
  }
}
</script>
