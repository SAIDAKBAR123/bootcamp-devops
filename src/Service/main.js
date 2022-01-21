import request from './axios'

const req = {
    getProject: (params) => request({ method: 'get', url: '/project', params }),
    getPractice: (params) => request({ method: 'get', url: '/practice', params }),
    getBackend: (params) => request({ method: 'get', url: '/backend', params })
}
export default req