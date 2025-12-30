import { Alert } from 'react-native';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetcherOptions {
  url: string;
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
  token?: string;
}

export async function fetcher<T>(options: FetcherOptions): Promise<T> {
  const { url, method = 'GET', body, headers = {}, token } = options;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Something went wrong');
    }

    return data as T;
  } catch (error: any) {
    console.error('API Error:', error);

    Alert.alert(
      'Error',
      error?.message || 'Network error. Please try again.',
    );

    throw error;
  }
}
