import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/noMatch'
import Yyn from 'pages/yyn'
import ComponentView from 'pages/component'

const routeList = {
	index: 'how-to-use',
	routeList: [{
		layout: DefaultLayout,
		routes: {
			'how-to-use': ComponentView
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'custom-theme': ComponentView
		}
	}, {
		routes: {
			'404': NoMatch
		}
	}, {
		routes: {
			'yyn': Yyn
		}
	}]
}

const componentList = ['layout', 'toast', 'modal', 'list-view', 'loading', 'tabs', 'carousel', 'popup', 'date-picker', 'date-picker-range', 'modal-select', 'picker-select', 'hammer', 'picker-view']

componentList.forEach(v => {
	let routes = {}
	routes['component/' + v] = ComponentView
	routeList.routeList.push({
		layout: DefaultLayout,
		routes
	})
})

export default routeList
