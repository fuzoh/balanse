from redis.commands.search.field import NumericField
from redis.commands.search.indexDefinition import IndexDefinition, IndexType


def create_redis_index_for_tickets(r):
    # Ensures that needed redis index is created
    # FT.CREATE idx:ticket-price ON JSON PREFIX 1 petzi-ticket: SCHEMA
    # $.details.ticket.price.amount AS ticket_price NUMERIC SORTABLE
    try:
        schema = (
            NumericField("$.details.ticket.price.amount", as_name="ticket_price", sortable=True),
        )
        rs = r.ft("idx:ticket-price")
        result = rs.create_index(
            schema,
            definition=IndexDefinition(
                prefix=["petzi-ticket:"], index_type=IndexType.JSON
            )
        )
    except Exception as e:
        if "Index already exists" in str(e):
            print("OK, Index already exists, not recreated")
        else:
            raise Exception("Error creating index", e)
