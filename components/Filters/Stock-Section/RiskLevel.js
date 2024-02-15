import HeadLineStock from "@/components/HeadLineStock"
import RadioInput from "@/components/RadioInput"
import { riskLevelList } from "@/constants"

function RiskLevel() {
  return (
    <div>
      <HeadLineStock title="Risk Level" />
      <RadioInput list={riskLevelList} name='risk' />
    </div>
  )
}

export default RiskLevel