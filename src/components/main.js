
import React from 'react'

import HeroHeader from 'components/hero-header'
import Features from 'components/features'
import ChangeLog from 'components/changelog'
import Recall from 'components/recall'
import Footer from 'components/footer'

import { black_gradient } from 'css/cascade'

import scrollHashIntoView from 'scroll-hash-into-view'

import pick from 'languages'


const folders_back_style = {
  background: 'url("imgs/stock-folders.jpg") no-repeat center'
}

const triangles_back_style = {
  background: '#626982'
}

const grey_back_style = {
  backgroundColor: '#424242'
}

const bg_style = black_gradient.style()


export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      version_index:0,
      platform_index:0,
    }

    this.setVersionIndex = this.setVersionIndex.bind(this)
    this.setPlatformIndex = this.setPlatformIndex.bind(this)
  }

  setVersionIndex(version_index) {
    this.setState({
      version_index,
    })
  }

  setPlatformIndex(platform_index) {
    this.setState({
      platform_index,
    })
  }


  componentDidMount() {
    const timeout = 10
    setTimeout(scrollHashIntoView, timeout)
  }

  render() {
    const state = this.state

    const version_index = state.version_index
    const setVersionIndex = this.setVersionIndex
    const platform_index = state.platform_index
    const setPlatformIndex = this.setPlatformIndex

    return (
      <div>
        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell small-12'>
            <HeroHeader
              version_index={version_index}
              setVersionIndex={setVersionIndex}
              platform_index={platform_index}
              setPlatformIndex={setPlatformIndex}
            />
          </div>
          <div className='cell small-12'>
            <Features/>
          </div>
        </div>

        <div className='grid-x'>
          <div className='cell' style={folders_back_style}>
            <div style={bg_style}>
              <div className='grid-x grid-padding-x grid-padding-y'>
                <div className='cell'>
                  <Recall
                    version_index={version_index}
                    setVersionIndex={setVersionIndex}
                    platform_index={platform_index}
                    setPlatformIndex={setPlatformIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell'>
            <ChangeLog/>
          </div>
        </div>

        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell small-12' style={grey_back_style}>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}