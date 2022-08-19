/**
 * @swagger
 * tags: admin-panel
 * description: product page section
 */

/**
 * @swagger
 *  /product/list:
 *    get:
 *      tags: [admin-panel]
 *      summary: get all product
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: data not found
 *        404:
 *          description: route not found.
 *        500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 *  /product/{id}:
 *    get:
 *      tags: [admin-panel]
 *      summary: get product by id
 *      description: get product by id
 *      parameters:
 *        -  in: path
 *           name: id
 *           type: string
 *           description: Enter id
 *           example: 4
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: data not found
 *        404:
 *          description: route not found
 *        500:
 *          description: Internal Server Error
 */