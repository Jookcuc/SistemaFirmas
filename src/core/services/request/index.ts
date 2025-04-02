import { getToken } from "../utils";
import { AsyncReturnType, errorType } from "../../types/AsyncReturnTypes";

const baseApiURL = import.meta.env.VITE_API_BASE_URL

const timeZoneOffset = new Date().getTimezoneOffset().toString();

async function GET<T = unknown>(url: string, key?: string): AsyncReturnType<T> {
  const token = getToken()
  try {
    const response = await fetch(baseApiURL + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Timezone-Offset': timeZoneOffset,
        Accept: '*/*',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(key && { 'x-api-key': key })
      }
    })
    const json = await response.json()
    if (response.status <= 299) return { data: json, error: null }
    return { data: null, error: json }
  } catch (error) {
    return { data: null, error: error as errorType }
  }
}

type RequestBody = object | string | number

async function POST<T = unknown, P = RequestBody>(
  url: string,
  body: P,
  key?: string
): AsyncReturnType<T> {
  try {
    const token = getToken()
    const response = await fetch(baseApiURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Timezone-Offset': timeZoneOffset,
        Accept: '*/*',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(key && { 'x-api-key': key })
      },

      body: JSON.stringify(body)
    })
    const json: T = await response.json()
    if (response.status <= 299) return { data: json, error: null }
    return { data: null, error: json as errorType }
  } catch (error) {
    return { data: null, error: error as errorType }
  }
}

async function PUT<T = unknown, P = object | string | number>(
  url: string,
  body: P,
  key?: string
): AsyncReturnType<T> {
  try {
    const token = getToken()
    const response = await fetch(baseApiURL + url, {
      method: 'PUT',
      headers: {
        'X-Timezone-Offset': timeZoneOffset,
        ...(key && { 'x-api-key': key }),
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const json = await response.json()
    if (response.status <= 299) return { data: json, error: null }
    return { data: null, error: json }
  } catch (error) {
    return { data: null, error: body as errorType }
  }
}

async function DELETE<T = unknown>(url: string, key?: string): AsyncReturnType<T> {
  try {
    const token = getToken()
    const response = await fetch(baseApiURL + url, {
      method: 'DELETE',
      headers: {
        'X-Timezone-Offset': timeZoneOffset,
        ...(key && { 'x-api-key': key }),
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-type': 'application/json'
      }
    })
    const json = await response.json()
    if (response.status <= 299) return { data: json, error: null }
    return { data: null, error: json }
  } catch (error) {
    return { data: null, error: error as errorType }
  }
}

async function PATCH<T = unknown, P = object | string | number>(
  url: string,
  body?: P,
  key?: string
): AsyncReturnType<T> {
  try {
    const token = getToken()
    const response = await fetch(baseApiURL + url, {
      method: 'PATCH',
      headers: {
        'X-Timezone-Offset': timeZoneOffset,
        ...(key && { 'x-api-key': key }),
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-Type': 'application/json'
      },
      ...(!!body && { body: JSON.stringify(body) })
    })
    const json = await response.json()
    if (response.status <= 299) return { data: json, error: null }
    return { data: null, error: json }
  } catch (error) {
    return { data: null, error: body as errorType }
  }
}

export { GET, POST, PUT, DELETE, PATCH }
