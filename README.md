# Beverage Sales Backend

## Overview

This backend server is built to support the Beverage Sales App, providing API endpoints for managing product data.

## Initial settings

Run the command to install dependencies

```bash
yarn install
```

## Setup

By default, the backend server runs on port 3002. To start the server, use the following command:

```bash
yarn start

```

## API Reference

#### Get all products

```http
  GET /api/products
```

#### Get product by SKU

```http
  GET /api/product/${SKU}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `sku`     | `string` | **Required**. SKU of product to fetch |

#### Get product by SKU

```http
  GET /api/stock-price/${SKU}
```

| Parameter | Type     | Description                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------- |
| `sku`     | `string` | **Required**. SKU of product to fetch variation stock and price information |
