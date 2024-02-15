import StrategyAssetList from '@/components/StrategyAssetList'
import TitleName from '@/components/TitleName'
import { assetList } from '@/constants'

function Accet() {
  return (
    <div>
      <div className=' md:text-start text-center md:ml-8 ml-0 mb-2'>
        <TitleName title='Asset' />
      </div>
      <StrategyAssetList list={assetList}/>
    </div>
  )
}

export default Accet